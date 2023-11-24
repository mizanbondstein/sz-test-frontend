import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Product from "./pages/Product.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [

    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/product",
      name: "product",
      component: Product,
    },
  ],
});

router.beforeEach((to, from, next) => {
  next();
});