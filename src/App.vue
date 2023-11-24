<template>
  <div id="app" style="margin: 0 auto">
    <div class="nav" style="text-align: center; font-size: 20px">
      <router-link to="/">Home</router-link>
      <router-link to="/product">Product page</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="postcss" scoped>
#app {
  .nav {
    padding: 12px 0px;

    a {
      margin-right: 12px;
    }
  }
}
</style>