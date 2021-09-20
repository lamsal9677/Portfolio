import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Resume from "../views/Resume.vue";
import Skills from "../views/Skills.vue";
import Works from "../views/Works.vue";
import Contact from "../views/Contact.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/resume",
    name: "Resume",
    component: Resume,
  },
  {
    path: "/skills",
    name: "Skills",
    component: Skills,
  },
  {
    path: "/works",
    name: "works",
    component: Works,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
