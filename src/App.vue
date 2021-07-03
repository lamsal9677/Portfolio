<template>
  <div id="app">
    <Sidebar id="sidebar" />
    <router-view id="routerview" />
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar/Sidebar.vue";
export default {
  name: "Home",
  components: {
    Sidebar,
  },
};
</script>
<style>
#app {
  text-align: center;
  display: flex;
}
#sidebar {
  /* float: left; */
  /* position: fixed; */
  display: flex;
  flex-direction: column;
  height: 700px;
  position: sticky;
  /* position: ; */
  /* height: inherit; */
}
#routerview {
  display: flex;
  flex-direction: column;
}
</style>
