<template>
  <div class="sideNavBar">
    <b-container class="bv-example-row">
      <b-row class="openclosenav">
        <button
          class="expandcollapsesmall"
          @click="expandCollapseFunction"
          v-if="!isExpanded"
        ></button>
        <button
          class="expandcollapsebig"
          @click="expandCollapseFunction"
          v-if="isExpanded"
        ></button>
      </b-row>

      <b-row style="margin:auto;">
        <router-link to="/" v-if="!isExpanded">
          <h2 class="mainHeading">
            <div>S</div>
            <div>L</div>
          </h2>
        </router-link>
        <router-link to="/" v-if="isExpanded">
          <h2 class="mainHeading">
            <div>Sanskar</div>
            <div>Lamsal</div>
          </h2>
        </router-link>
      </b-row>

      <b-row id="tablerow">
        <router-link to="/about" v-if="!isExpanded">
          <BIconInfoCircleFill class="icon" />
        </router-link>
        <router-link to="/about" v-if="isExpanded" class="navLinkTitle">
          <BIconInfoCircleFill class="icon" /> About
        </router-link>
        <br />
      </b-row>

      <b-row id="tablerow"
        ><router-link to="/skills" v-if="!isExpanded">
          <BIconGearFill class="icon" />
        </router-link>
        <router-link to="/skills" v-if="isExpanded" class="navLinkTitle">
          <BIconGearFill class="icon" /> Skills
        </router-link>
        <br />
      </b-row>

      <b-row id="tablerow">
        <router-link to="/works" v-if="!isExpanded">
          <BIconBriefcaseFill class="icon" />
        </router-link>
        <router-link to="/works" v-if="isExpanded" class="navLinkTitle">
          <BIconBriefcaseFill class="icon" /> Works
        </router-link>
        <br />
      </b-row>

      <b-row id="tablerow">
        <router-link to="/contact" v-if="!isExpanded">
          <BIconTelephoneFill class="icon" />
        </router-link>
        <router-link to="/contact" v-if="isExpanded" class="navLinkTitle">
          <BIconTelephoneFill class="icon" /> Contact
        </router-link>
      </b-row>
    </b-container>
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
  data: function() {
    return {
      isExpanded: true,
    };
  },
  components: {
    BIconInfoCircleFill,
    BIconGearFill,
    BIconTelephoneFill,
    BIconBriefcaseFill,
  },
  methods: {
    expandCollapseFunction() {
      this.isExpanded = !this.isExpanded;
    },
  },
};
</script>

<style>
.openclosenav {
  height: 50px;
  margin: auto;
}
.mainHeading {
  color: gray;
  height: 100px;
}
#tablerow {
  height: 60px;
  margin: auto;
}
.sideNavBar {
  background-color: black;
}
.icon {
  font-size: 30px;
  color: green;
}
.navLinkTitle {
  color: white;
  font-size: 25px;
}
.expandcollapsebig {
  min-width: 10px;
  height: 20px;
  margin: auto;
}
.expandcollapsesmall {
  margin: auto;
  min-width: 10px;
  height: 20px;
}
</style>
