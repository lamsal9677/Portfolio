<template>
  <div id="navbar">
    <div id="name">
      <router-link to="/" id="firstName">Sanskar</router-link>
      <router-link to="/" id="lastName">Lamsal</router-link>
    </div>
    <div id="links">
      <router-link to="/" id="link">HOME</router-link>
      <router-link to="/resume" id="link">RESUME</router-link>
      <router-link to="/skills" id="link">SKILLS</router-link>
      <router-link to="/contact" id="link">CONTACT</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  components: {},
  mounted: function() {
    document.getElementById("name").onmouseover = function() {
      document.getElementById("firstName").style.color = "green";
      document.getElementById("lastName").style.color = "inherit";
    };
    document.getElementById("name").onmouseleave = function() {
      document.getElementById("firstName").style.color = "inherit";
      document.getElementById("lastName").style.color = "green";
    };
  },
};
</script>

<style>
#navbar {
  display: flex;
  flex-direction: row;
  position: relative;
}
#name {
  display: flex;
  flex-direction: row;
}
#firstName {
  color: inherit;
  text-decoration: none;
}
#lastName {
  text-decoration: none;
  color: green;
}
#links {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
#link {
  text-decoration: none;
  margin-left: 10px;
  margin-right: 10px;

  color: inherit;
}
#link:hover {
  text-decoration: none;
  color: green;
  padding: 2%;
  font-size: 2rem;
  background-color: rgb(209, 209, 209);
}
</style>
