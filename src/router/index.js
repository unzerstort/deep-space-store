import { createRouter, createWebHistory } from "vue-router";
import CheckoutView from "../views/CheckoutView.vue";
import NotFoundView from "@/views/NotFoundView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:id",
      name: "home",
      component: CheckoutView,
    },
    {
      path: "/:catchAll(.*)",
      name: "notFound",
      component: NotFoundView,
    },
  ],
});

export default router;
