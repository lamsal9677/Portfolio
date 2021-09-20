<template>
  <div id="app">
    <NavBar />
    <router-view id="routerView" />
  </div>
</template>

<script>
import NavBar from "./components/navBar/navBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>
<style>
#app {
  width: 100%;
  font-size: 1.5rem;
}
#routerView {
  margin-top: 1rem;
  width: 100%;
  padding-top: 4%;
  padding-bottom: 2%;
  margin: 0;
}
</style>
