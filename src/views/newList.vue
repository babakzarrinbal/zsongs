<template>
  <div class="container-fluid bg-dark text-light">
    <div class="songs">
      <div
        class="w-100 my-2 shadow bg-light text-dark clickable d-flex"
        v-for="(s,i) in list"
        :key="i"
        @click="selecteditem = s"
      >
        <audio :src="s.url" controls preload="metadata" style="height: 25px;"></audio>
        <span class="flex-grow-1">{{s.title}}</span>
        <a class="clickable" :href="s.url+'?id=adf'" target="_blank"  :download="'rihanna--'+s.title">download</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  async created() {
    this.list = await window
      .fetch("https://babakzarrinbal.github.io/db/zsongs/songs/rihanna.json")
      .then(r => r.json());
  },
  methods: {}
};
</script>

<style>
</style>