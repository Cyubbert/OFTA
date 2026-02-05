import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import NorrunView from "../views/NorrunView.vue";
import SuneView from "../views/SuneView.vue";
import LiiraView from "../views/LiiraView.vue";
import TalonaView from "../views/TalonaView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/world/norrun", component: NorrunView },
  { path: "/world/sune", component: SuneView },
  { path: "/world/liira", component: LiiraView },
  { path: "/world/talona", component: TalonaView }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
