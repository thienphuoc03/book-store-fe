import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/user/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import ShopView from "../views/user/ShopView.vue";
import RegisterView from "../views/RegisterView.vue";
import ProductView from "../views/user/ProductView.vue";
import CheckoutView from "../views/user/CheckoutView.vue";
import ProfileView from "../views/user/ProfileView.vue";
import WishListView from "../views/user/WishListView.vue";
import IndexView from "../views/IndexView.vue";

const routes = [
  {
    path: "/",
    name: "index",
    component: IndexView,
    children: [
      { path: "/", name: "home", component: HomeView },
      { path: "/shop", name: "shop", component: ShopView },
      { path: "/product", name: "product", component: ProductView },
      { path: "/checkout", name: "checkout", component: CheckoutView },
      { path: "/profile", name: "profile", component: ProfileView },
      { path: "/wish-list", name: "wishList", component: WishListView },
    ],
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
  // {
  //   path: "/admin",
  //   name: "admin",
  //   component: LoginView,
  //   redirect: { name: "login" },
  //   children: [
  //     { path: "/home", name: "home", component: HomeView },
  //     { path: "/login", name: "login", component: LoginView },
  //   ],
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
