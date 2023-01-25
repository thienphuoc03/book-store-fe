import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";

// USER PAGES
import HomeView from "@/views/user/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import ShopView from "@/views/user/ShopView.vue";
import RegisterView from "@/views/RegisterView.vue";
import ProductView from "@/views/user/ProductView.vue";
import CheckoutView from "@/views/user/CheckoutView.vue";
import ProfileView from "@/views/user/ProfileView.vue";
import WishListView from "@/views/user/WishListView.vue";
import IndexView from "@/views/IndexView.vue";

// ADMIN PAGES
import AdminLayout from "@/views/admin/AdminLayout.vue";
import Dashboard from "@/views/admin/components/Dashboard.vue";
import Settings from "@/views/admin/components/SettingsView.vue";
import Tables from "@/views/admin/components/TablesView.vue";
import Maps from "@/views/admin/components/MapsView.vue";
import Landing from "@/views/admin/Landing.vue";
import Profile from "@/views/admin/Profile.vue";
import Index from "@/views/admin/IndexAdmin.vue";

const routes = [
  {
    path: "/",
    name: "index",
    component: IndexView,
    children: [
      { path: "/", name: "home", component: HomeView },
      { path: "/shop", name: "shop", component: ShopView },
      { path: "/product/:id", name: "product", component: ProductView },
      { path: "/checkout", name: "checkout", component: CheckoutView },
      { path: "/profile", name: "profile", component: ProfileView },
      { path: "/wish-list", name: "wishList", component: WishListView },
    ],
    // meta: {
    //   requiresAuth: true,
    // },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },

  {
    path: "/admin",
    redirect: "/dashboard",
    component: AdminLayout,
    children: [
      {
        path: "/dashboard",
        component: Dashboard,
      },
      {
        path: "/settings",
        component: Settings,
      },
      {
        path: "/tables",
        component: Tables,
      },
      {
        path: "/maps",
        component: Maps,
      },
    ],
  },
  {
    path: "/admin/landing",
    component: Landing,
  },
  {
    path: "/admin/profile",
    component: Profile,
  },
  {
    path: "/admin",
    component: Index,
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next("/");
  } else {
    next();
  }
});

export default router;
