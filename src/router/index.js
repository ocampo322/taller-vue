import { createRouter, createWebHashHistory } from "vue-router";

import EditarComuna from "@/components/Comuna/EditarComuna.vue";
import NewComuna from "@/components/Comuna/NewComuna.vue";
import Comunas from "../views/Comunas.vue";
import HomeView from "@/views/HomeView.vue";

const routes = [
  {    path: "/",    name: "Home",    component: HomeView,
  },
  {    path: "/comunas",    name: "Comunas",    component: Comunas,
  },
  {    path: "/editar-comuna/:id",    name: "EditarComuna",    component: EditarComuna,
  },
  {    path: "/add-comuna/",    name: "NewComuna",    component: NewComuna,
  },
  {    path: "/about",    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;