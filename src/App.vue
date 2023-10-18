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

    <nav class="navbar bg-light">
      <div class="container">
        <ul class="navbar-nav flex-row gap-3">
          <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
          <li class="nav-item"><router-link class="nav-link" :to="{ name: 'projects.index' }">Projects</router-link></li>
        </ul>
      </div>
    </nav>

  </header>

  <main>

    <router-view></router-view>

  </main>

  <footer>
    <div class="bg-light py-5"></div>
  </footer>
</template>

<style lang="scss"></style>
