<template>
  <div id="app">
    <!-- <img alt="3" src="./Photos/1.jpg" /> -->
    <onexone imgsource= "1.jpg"/>
</div>
</template>

<script>
import onexone from "./components/onexone.vue";

export default {
  name: "App",
  components: {
    //HelloWorld,
    onexone
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
