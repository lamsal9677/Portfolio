<template>
  <div class="main">
    <h2 class="nameEmployer">{{ nameOfEmployer }}</h2>
    <img class="logo" :src="logoSrc" />
    <h1 class="nameJob">{{ positionName }}</h1>
    <h3 class="yearWorked">{{ dateEmployed }}</h3>
  </div>
</template>

<script>
export default {
  name: "workExp",
  components: {},
  props: {
    positionName: { type: String },
    nameOfEmployer: { type: String },
    dateEmployed: { type: String },
    logoSrc: { type: String },
  },
};
</script>

<style scoped>
.main {
  background-color: rgb(255, 255, 255);
  height: 300px;
  width: 300px;
}
.logo {
  width: 8 5%;
  height: 60%;
  margin: auto;
  padding: 7px;
  border-radius: 20%;
}
.nameJob {
  font-size: 20px;
  text-align: left;
  padding-left: 10px;
  padding-top: 15px;
}
.nameEmployer {
  font-size: 25px;
  padding-top: 10px;
}
.yearWorked {
  font-size: 15px;
  text-align: left;
  padding-left: 10px;
}
/* COMMIT */
</style>
