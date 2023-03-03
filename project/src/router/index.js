import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/pages/home"
  },
  {
    path: "/pages",
    component: () => import("../views/Pages.vue"),
    children: [
      {
        path: "",
        redirect: "home"
      },
      {
        path: "home",
        name: "Home",
        component: () => import("../views/Home.vue")
      },
      {
        path: "design",
        name: "Design",
        component: () => import("../views/Design.vue")
      },
      {
        path: "user",
        name: "User",
        component: () => import("../views/User.vue")
      },
    ]
  },
  {
    path: "/pages/search",
    name: "Search",
    component: () => import("../views/Search.vue")
  },
  {
    path: "/pages/everydetals",
    name: "Everydetals",
    component: () => import("../views/Everydetals.vue")
  },
  {
    path: "/pages/scenedetals",
    name: "Scenedetals",
    component: () => import("../views/Scenedetals.vue")
  },
  {
    path: "/pages/details",
    name: "ImageDetails",
    component: () => import("../views/ImageDetails.vue")
  },
  {
    path: "/pages/taruser",
    name: "TarUser",
    component: () => import("../views/TarUser.vue")
  },
]

const router = new VueRouter({
  routes
})

export default router
