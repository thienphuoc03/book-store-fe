<template>
  <header class="py-4 shadow-sm bg-white">
    <div class="container flex items-center justify-between">
      <a @click="navigateTo('/')" class="flex items-center cursor-pointer">
        <img src="../assets/images/logo.png" alt="Logo" class="w-16" />
        <div class="flex items-center">
          <h3 class="text-2xl font-bold text-red-500">Book</h3>
          <h3 class="text-2xl font-bold">Store</h3>
        </div>
      </a>

      <div class="w-full max-w-xl relative flex">
        <!-- <span class="absolute left-4 top-3 text-lg text-gray-400">
          <i class="fa-solid fa-magnifying-glass"></i>
        </span> -->
        <input
          type="text"
          name="search"
          id="search"
          class="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none"
          placeholder="Tên sách..."
        />
        <button
          class="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition"
        >
          Search
        </button>
      </div>

      <div class="flex items-center space-x-4">
        <a
          href="#"
          class="text-center text-gray-700 hover:text-primary transition relative"
        >
          <div class="text-2xl">
            <i class="fa-regular fa-heart"></i>
          </div>
          <div class="text-xs leading-3">Wishlist</div>
          <div
            class="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs"
          >
            8
          </div>
        </a>
        <a
          href="#"
          class="text-center text-gray-700 hover:text-primary transition relative"
        >
          <div class="text-2xl">
            <i class="fa-solid fa-bag-shopping"></i>
          </div>
          <div class="text-xs leading-3">Cart</div>
          <div
            class="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs"
          >
            2
          </div>
        </a>
        <a
          @click="navigateTo('/profile')"
          class="text-center w-full text-gray-700 hover:text-primary transition relative cursor-pointer"
        >
          <div class="text-2xl w-8 h-8 flex justify-center items-center">
            <i v-if="!currentUser" class="fa-regular fa-user"></i>
            <img
              v-else
              class="rounded-full object-cover"
              src="https://i.pinimg.com/564x/2f/88/2f/2f882f3aad3aabbdc2137797dab75d2e.jpg"
              alt="avatar"
            />
          </div>
          <div class="text-xs leading-3">{{ username || "Account" }}</div>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",

  data() {
    return {
      user: localStorage.getItem("user"),
      username: localStorage.getItem("user.username"),
    };
  },
  computed: {
    currentUser() {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
};
</script>
