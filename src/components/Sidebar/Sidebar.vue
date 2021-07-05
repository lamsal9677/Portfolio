<template>
  <div class="sideNavBar">
    <b-container class="bv-example-row">
      <b-row style="margin:auto;">
        <router-link to="/" v-if="!isExpanded">
          <img
            class="circular--square--collapsed"
            src="../../assets/profile.jpg"
          />
          <h2 class="mainHeading">
            <div>S</div>
            <div>L</div>
          </h2>
        </router-link>
        <router-link to="/" v-if="isExpanded">
          <img
            class="circular--square--expanded"
            src="../../assets/profile.jpg"
          />
          <h2 class="mainHeading">
            <div>Sanskar</div>
            <div>Lamsal</div>
          </h2>
        </router-link>
      </b-row>

      <b-row id="tablerow">
        <router-link to="/about" v-if="!isExpanded">
          <BIconInfoCircleFill class="icons" />
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
          <BIconGearFill class="icon" /> My Skills
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

      <b-row class="openclosenav">
        <BIconArrowBarRight
          class="expandcollapsesmall"
          @click="expandCollapseFunction"
          v-if="!isExpanded"
        />
        <BIconArrowBarLeft
          class="expandcollapsebig"
          @click="expandCollapseFunction"
          v-if="isExpanded"
        />
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
  BIconArrowBarLeft,
  BIconArrowBarRight,
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
    BIconArrowBarLeft,
    BIconArrowBarRight,
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
  padding: 10px;
}
.icon {
  /* margin: auto; */
  font-size: 30px;
  color: green;
}
.icons {
  margin: auto;
  font-size: 30px;
  color: green;
  /* text-align: center; */
}
.navLinkTitle {
  color: white;
  font-size: 25px;
}
.expandcollapsebig {
  color: white;
  font-size: 20px;
  height: 20px;
  margin: auto;
}
.expandcollapsesmall {
  color: white;
  font-size: 20px;
  margin: auto;
  height: 20px;
}
.circular--square--expanded {
  margin-top: 20px;
  border-radius: 50%;
  height: 100px;
  width: 100px;
}
.circular--square--collapsed {
  margin-top: 20px;
  border-radius: 50%;
  height: 50px;
  width: 50px;
}
</style>
