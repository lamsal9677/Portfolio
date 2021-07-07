<template>
  <div id="app">
    <div id="socialmediaicon">
      <SocialMediaIcon />
      <SocialMediaIcon />
      <SocialMediaIcon />
    </div>
    <Sidebar id="sidebar" />
    <router-view id="routerview" />
  </div>
</template>

<script>
import SocialMediaIcon from "./components/SocialMediaIcon/SocialMediaIcon";
import Sidebar from "./components/Sidebar/Sidebar.vue";
export default {
  name: "Home",
  components: {
    Sidebar,
    SocialMediaIcon,
  },
};
</script>
<style>
#app {
  text-align: center;
  display: flex;
  background-color: rgb(229, 235, 230);
}
#sidebar {
  /* float: left; */
  /* position: fixed; */
  display: flex;
  flex-direction: column;
  height: 700px;
  position: sticky; /*fixed*/
  /* position: ; */
  /* height: inherit; */
}
#routerview {
  display: flex;
  flex-direction: column;
}

#socialmediaicon {
  display: flex;
  height: 15px;
  width: 15px;
  position: fixed;
  top: 20px;
  right: 150px;
  z-index: 1;
}
</style>

//<a href="#" class="float">
    //   <div>
    //     Resume
    //   </div>
    // // </a>

// .float { // /* margin: auto; */ // font-size: 14px; // font-family: "Lucida
Sans", "Lucida Sans Regular", "Lucida Grande", // "Lucida Sans Unicode", Geneva,
Verdana, sans-serif; // position: fixed; // width: 60px; // height: 60px; //
bottom: 40px; // right: 40px; // background-color: black; // color: #fff; //
border-radius: 50px; // line-height: 60px; // /* text-align: center; */ //
box-shadow: 2px 2px 3px #999; // }
