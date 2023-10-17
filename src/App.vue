<script>

export default {
  components: {

  },

  data() {
    return {

    };
  },
  methods: {

  },

  mounted() {

  },

};

</script>

<template>
  <header>
    <nav class="container">
      <div class="py-3 d-flex">
        <ul class="ms-auto d-flex list-unstyled gap-3">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link :to="{ name: 'projects.index' }">Projects</router-link></li>
        </ul>
      </div>
    </nav>
  </header>

  <router-view></router-view>
</template>

<style lang="scss"></style>
