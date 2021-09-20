<template>
  <div id="app">
    <div id="navbar">
      <div id="name">
        <div id="firstName">
          Sanskar
        </div>
        <div id="lastName">
          Lamsal
        </div>
      </div>
      <div id="links">
        <router-link to="/about" v-if="!isExpanded" id="link"
          >ABOUT</router-link
        >
        <router-link to="/about" v-if="!isExpanded" id="link"
          >SKILLS</router-link
        >
        <router-link to="/about" v-if="!isExpanded" id="link"
          >WORKS</router-link
        >
      </div>
    </div>
  </div>
</template>
<style>
#app {
  width: 100%;
  font-size: 1.5rem;
}
#navbar {
  display: flex;
  flex-direction: row;
}
#name {
  display: flex;
  flex-direction: row;
}
#lastName {
  color: green;
}
#links {
  margin-left: auto;
  margin-right: 0;
}
#link {
  text-decoration: none;
  padding: 3%;
  color: inherit;
}
#link:hover {
  text-decoration: none;
  color: green;
  background-color: rgb(209, 209, 209);
}
</style>
