import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/ThePedidos",
            name: "ThPedidos",

            component: () => import("../views/ThePedidos.vue"),
        },
    ],
});

export default router;
