import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import DiscussionHousing from "../views/DiscussionHousing.vue";
import IdeaWall from "../views/IdeaWall.vue";
import Participate from "../views/Participate.vue";
import ProjectInfo from "../views/ProjectInfo.vue";
import Snapshots from "../views/Snapshots.vue";
import Updates from "../views/Updates.vue";
import InputMap from "../views/InputMap.vue";
import Admin from "../views/Admin.vue";

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
    component: DiscussionHousing
  },
  {
    path: "/updates",
    name: "Updates",
    component: Updates
  },
  {
    path: "/ideawall",
    name: "IdeaWall",
    component: IdeaWall
  },
  {
    path: "/inputmap",
    name: "InputMap",
    component: InputMap
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin
  }
];

const router = new VueRouter({
  routes
});

export default router;
