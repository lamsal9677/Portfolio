<template>
  <div>
    <div>
      <h1 id="Name">Hi, I'm Sanskar Lamsall</h1>
      <!-- Import About -->
      <b-row>
        <b-col id="contactscolumn"><Contact id="contacts"/></b-col>
      </b-row>
      <b-row>
        <b-col id="contactscolumn"><Contact id="contacts"/></b-col>
        <!-- <b-col id="contactscolumn" style="background-color: blue;"></b-col> -->
      </b-row>
    </div>
  </div>
</template>

<script>
import Contact from "../views/Contact";
export default {
  name: "Sidebar",
  components: {
    Contact,
  },
};
</script>

<style scoped>
#contactscolumn {
  height: 650px;
  width: 690px;
  /* background-color: red; */
  padding: 20px;
}
#contacts {
  background-color: white;
  border-radius: 10%;
  height: 640px;
  width: 630px;
}
</style>
