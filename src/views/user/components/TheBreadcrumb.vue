<template>
  <div class="container py-4 flex items-center gap-3">
    <a @click="navigateTo('/')" class="text-primary text-base cursor-pointer">
      <i class="fa-solid fa-house"></i>
    </a>
    <span class="text-sm text-gray-400">
      <i class="fa-solid fa-chevron-right"></i>
    </span>
    <p class="text-gray-600 font-medium">Profile</p>
  </div>

  <!-- <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li
        class="breadcrumb-item"
        v-for="(crumb, index) in breadcrumbs"
        :key="index"
      >
        <a v-if="index !== breadcrumbs.length - 1" :href="crumb.href">{{
          crumb.text
        }}</a>
        <span v-else>{{ crumb.text }}</span>
      </li>
    </ol>
  </nav> -->
</template>

<script>
export default {
  name: "TheBreadcrumb",

  data() {
    return {
      breadcrumbs: [
        { text: "Home", href: "/" },
        { text: "Login", href: "/login" },
        { text: "Register", href: "/register" },
        { text: "Shop", href: "/shop" },
        { text: "Product", href: "/product" },
        { text: "Checkout", href: "/checkout" },
        { text: "Profile", href: "/profile" },
        { text: "Wish List", href: "/wish-list" },
      ],
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
};
</script>
