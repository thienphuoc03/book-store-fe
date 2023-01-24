<template>
  <nav class="bg-gray-800">
    <div class="container flex">
      <div
        class="px-8 py-4 bg-primary flex items-center cursor-pointer relative group"
      >
        <span class="text-white">
          <i class="fa-solid fa-bars"></i>
        </span>

        <span class="capitalize ml-2 text-white">Danh mục</span>

        <!-- dropdown -->

        <div
          class="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible"
        >
          <a
            v-for="category in categories"
            :key="category.id"
            href="#"
            class="flex items-center px-6 py-3 hover:bg-gray-100 transition"
          >
            <span class="text-gray-600 text-sm">{{ category.name }}</span>
          </a>
          <!-- <a
            href="#"
            class="flex items-center px-6 py-3 hover:bg-gray-100 transition"
          >
            <span class="ml-6 text-gray-600 text-sm">Terarce</span>
          </a>
          <a
            href="#"
            class="flex items-center px-6 py-3 hover:bg-gray-100 transition"
          >
            <span class="ml-6 text-gray-600 text-sm">Bed</span>
          </a>
          <a
            href="#"
            class="flex items-center px-6 py-3 hover:bg-gray-100 transition"
          >
            <span class="ml-6 text-gray-600 text-sm">office</span>
          </a>
          <a
            href="#"
            class="flex items-center px-6 py-3 hover:bg-gray-100 transition"
          >
            <span class="ml-6 text-gray-600 text-sm">Outdoor</span>
          </a>
          <a
            href="#"
            class="flex items-center px-6 py-3 hover:bg-gray-100 transition"
          >
            <span class="ml-6 text-gray-600 text-sm">Mattress</span>
          </a> -->
        </div>
      </div>

      <div class="flex items-center justify-between flex-grow pl-12">
        <div class="flex items-center space-x-6 capitalize">
          <a
            @click="navigateTo('/')"
            class="text-gray-200 hover:text-white hover:underline hover:bg-primary transition cursor-pointer"
            >Trang chủ</a
          >
          <a
            @click="navigateTo('/shop')"
            class="text-gray-200 hover:text-white hover:underline transition cursor-pointer"
            >Sản phẩm</a
          >
          <a
            href="#"
            class="text-gray-200 hover:text-white hover:underline transition cursor-pointer"
            >Thông tin về chúng tôi</a
          >
          <a
            href="#"
            class="text-gray-200 hover:text-white hover:underline transition cursor-pointer"
            >Liên hệ</a
          >
        </div>
        <a
          v-if="!isLogin"
          @click="navigateTo('/login')"
          class="text-gray-200 hover:text-black hover:bg-white cursor-pointer transition border border-solid py-2 px-4 rounded-full"
          >Đăng nhập</a
        >
      </div>
    </div>
  </nav>
</template>

<script>
import CategoryAPIs from "../../../APIs/CategoryAPIs";

export default {
  name: "TheNavBar",

  data() {
    return {
      categories: [],
      isLogin: false,
    };
  },
  computed: {
    currentUser() {
      return this.$store.getters.isLoggedIn;
    },
  },
  mounted() {
    this.getAllCategory();
    if (!this.currentUser) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },

    async getAllCategory() {
      CategoryAPIs.getAllCategory()
        .then((response) => {
          this.categories = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async checkLogin() {
      const user = localStorage.getItem("user");
      if (user) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    },
  },
};
</script>
