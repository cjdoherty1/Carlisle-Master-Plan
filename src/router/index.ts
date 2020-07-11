import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import Discussion from "../views/Discussion.vue";
import IdeaWall from "../views/IdeaWall.vue";
import Participate from "../views/Participate.vue";
import ProjectInfo from "../views/ProjectInfo.vue";
import Snapshots from "../views/Snapshots.vue";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/project_info",
    name: "ProjectInfo",
    component: ProjectInfo
  },
  {
    path: "/idea_wall",
    name: "IdeaWall",
    component: IdeaWall
  },
  {
    path: "/snapshots",
    name: "Snapshots",
    component: Snapshots
  },
  {
    path: "/participate",
    name: "Participate",
    component: Participate
  },
  {
    path: "/discussion",
    name: "Discussion",
    component: Discussion
  }
];

const router = new VueRouter({
  routes
});

export default router;
