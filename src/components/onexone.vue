<template>
  <div>
    <h1>
      Jii
      {{getSource}}
    </h1>
    <img v-bind:src="'./Photos/1.jpg '" /> 
  </div>
</template>

<script>
export default {
  name: "onexone",
  props: {
    imgsource: String,
  },
  computed: {
    getSource () {
      //return "./Photos/1.jpg"
      return '1.jpg'
    }
  }
};
</script>

<style scoped>
</style>
