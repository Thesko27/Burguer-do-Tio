import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/ThePedidos",
            name: "ThePedidos",

            component: () => import("../views/ThePedidos.vue"),
        },
    ],
});

export default router;
