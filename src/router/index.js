import { createRouter, createWebHistory } from "vue-router";
import CheckoutView from "@/views/CheckoutView.vue";
import NotFoundView from "@/views/NotFoundView.vue"
import SuccessView from "@/views/SuccessView.vue"

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
    {
      path: "/payment_successful",
      name: "paymentSuccessful",
      component: SuccessView,
    },
  ],
});

export default router;
