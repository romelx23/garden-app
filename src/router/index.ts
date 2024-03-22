import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      children: [
        // {
        //   path: '/login',
        //   name: 'login',
        //   component: () => import('../views/Login.vue')
        // },
        // {
        //   path: '/register',
        //   name: 'register',
        //   component: () => import('../views/Register.vue')
        // }
      ],
    },
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      path: "/my-plants",
      name: "my-plants",
      component: () => import("../views/MyPlants.vue"),
    },
    // {
    //   path: "/my-profile",
    //   name: "my-profile",
    //   component: () => import("../views/MyProfile.vue"),
    // },
    // {
    //   path: '/my-plants/:id',
    //   name: 'my-plant',
    //   component: () => import('../views/MyPlant.vue')
    // },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("../views/NotFound.vue"),
    },
    {
      path: "/plant/:id",
      name: "plant",
      component: () => import("../views/PlantView.vue"),
      props: true,
      alias: "/plant",
    },
  ],
});

export default router;
