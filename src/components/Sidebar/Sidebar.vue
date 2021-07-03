<template>
  <div class="sideNavBar">
    <router-link to="/">
      <h2 class="mainHeading">
        <div>Sanskar</div>
        <div>Lamsal</div>
      </h2>
    </router-link>
    <div id="nav">
      <router-link to="/about"> <BIconInfoCircleFill /> About </router-link>
      <br />
      <router-link to="/skills"> <BIconGearFill /> Skills </router-link>
      <br />
      <router-link to="/works"> <BIconBriefcaseFill /> Works </router-link>
      <br />
      <router-link to="/contact"> <BIconTelephoneFill /> Contact </router-link>
    </div>
    <RouteIconAndName />
    <h2 class="icon">ICON</h2>
  </div>
</template>

<script>
import {
  BIconInfoCircleFill,
  BIconGearFill,
  BIconTelephoneFill,
  BIconBriefcaseFill,
} from "bootstrap-vue";

export default {
  name: "Sidebar",
  components: {
    BIconInfoCircleFill,
    BIconGearFill,
    BIconTelephoneFill,
    BIconBriefcaseFill,
  },
};
</script>

<style>
.sideNavBar {
  background-color: green;
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
}
.mainHeading {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  justify-content: center;
}
.icon {
  position: absolute;
  bottom: 0;
}
</style>
