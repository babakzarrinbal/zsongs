<template>
  <div class="container-fluid bg-dark">
    <div class="position-fixed d-flex" style="top:0;left:0;z-index:99;">
      <div
        class="px-2 clickable font-weight-bold text-light pt-1"
        @click="addStorage"
      >storage:{{$root.storeUsed +"/" + $root.storeTotal}} MB</div>
      <div
        class="btn btn-primary px-1 py-1"
        style="font-size:12px"
        @click="$refs.fileinput.click()"
      >files</div>
      <input
        type="file"
        style="display:none;"
        ref="fileinput"
        @change="addSongs($event)"
        
        multiple="true"
      />
    </div>
    <audio class="w-100 d-block" :src="loc + selectedSong.name" controls ref="audioEl"></audio>
    <div class="list" >
      <div class="song my-2 py-2 text-center bg-light clickable"  v-for="(s,i) in songList" :key="i" @click="changeSong(s)">{{s.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loc: "",
      selectedSong: {},
      songList: [],
      fs: null
    };
  },
  async created() {
    this.songList = JSON.parse(window.localStorage.getItem("bzsongs-offline") || "[]");
    window.song  = this.songList;
    this.selectedSong = this.songList[0] || {};
    this.loc = "filesystem:" + window.location.origin + "/persistent/songs/";
  },
  methods: {
    addStorage() {
      let s = Number(window.prompt("How much (in MB)"));
      console.log(s);
      if (!s) return;
      window.webkitStorageInfo.requestQuota(
        window.PERSISTENT || window.LocalFileSystem.PERSISTENT,
        1024 * 1024 * s,
        () => {
          this.$root.getStorageInfo();
          if (this.$root.storeTotal) return;
          (window.requestFileSystem || window.webkitRequestFileSystem)(
            window.PERSISTENT || window.LocalFileSystem.PERSISTENT,
            1024 * 1024 * this.$root.storeTotal,
            fs =>
              fs.root.getDirectory(
                "songs",
                { create: true, exclusive: false },
                console.log,
                () => window.alert("error creating folder!!!")
              ),
            () => window.alert("error getting sotrage!!!")
          );
        },
        () => window.alert("Error Happend!")
      );
    },
    async addSongs(event) {
      let fs = await new Promise(resolve =>
        (window.requestFileSystem || window.webkitRequestFileSystem)(
          window.PERSISTENT || window.LocalFileSystem.PERSISTENT,
          1024 * 1024 * (this.$root.storeTotal - this.$root.storeUsed),
          fs => ((this.loc = fs.root.toURL() + "songs/"), resolve(fs)),
          () => window.alert("error getting sotrage!!!")
        )
      );
      window.fs = fs;
      let files = event.target.files;
      await new Promise(resolve =>fs.root.getDirectory(
        "songs",
        { create: true, exclusive: false },
        resolve
      ));
      let writingpromises = [];
      for (let i = 0; i < files.length; i++) {
        let file = files[i];
        if (![".mp3"].includes(file.name.slice(-4).toLowerCase())) continue;
        let resolver;
        let error;
        writingpromises.push(new Promise(r => (resolver = r)));
        fs.root.getFile(
          "songs/" + file.name,
          { create: true },
          fileEntry => {
            if (fileEntry.size) return resolver(null);
            fileEntry.createWriter(fileWriter => {
              fileWriter.onwriteend = () => resolver(error ? null : file);
              fileWriter.onerror = () => {
                error = true;
                if (this.$root.storUsed == this.$root.storeTotal)
                  window.alert("Storage is full");
                fileEntry.remove(() =>
                  window.console.log(
                    "file ",
                    file.name,
                    "deleted!",
                    window.console.error
                  )
                );
              };
              fileWriter.write(file);
            }, console.error);
          },
          console.error
        );
      }
      let writtenfiles = await Promise.all(writingpromises)
       writtenfiles =  writtenfiles.filter(f => f)
        .map(f => ({
          title: f.name.slice(0, f.name.lastIndexOf(".")),
          name: f.name,
          size: f.size,
          type: f.type,
          webkitRelativePath: f.webkitRelativePath
        }));
        console.log(writtenfiles)
      this.songList = [...this.songList, ...writtenfiles];
      window.localStorage.setItem(
        "bzsongs-offline",
        JSON.stringify(this.songList)
      );
    },
    async changeSong(s){
      this.selectedSong = s;
      await this.$nextTick();
      this.$refs.audioEl.play();
    }
  }
};
</script>

<style>
</style>