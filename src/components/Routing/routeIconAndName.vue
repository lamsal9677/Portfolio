<template>
  <div>
    <div>
      Icon
    </div>
    <div>
      {{ this.getName }}
    </div>
  </div>
</template>

<script>
export default {
  name: "routeIconAndName",
  components: {},
  props: {
    namee: {
      type: String,
    },
  },
  computed: {
    getName() {
      return this.namee;
    },
  },
};
</script>

<style scoped></style>
