<script>

import axios from "axios";

export default {
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    fetchData() {
      axios.get("http://127.0.0.1:8000/api/projects").then((response) => {
        this.projects = response.data.results;
      });
    },
  },
  mounted() {
    this.fetchData();
  },
};

</script>

<template></template>

<style lang="scss"></style>
