<template>
  <div class="contain py-16">
    <div class="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
      <a
        @click="navigateTo('/')"
        class="cursor-pointer w-full flex justify-start hover:text-red-500"
        ><span class="w-6 h-6"
          ><i class="fa-solid fa-house" title="Home"></i></span
      ></a>
      <h2 class="text-3xl uppercase font-medium mb-1">Login</h2>
      <form @submit="handleLogin" autocomplete="off">
        <div class="space-y-2">
          <div>
            <label for="username" class="text-gray-600 mb-2 flex justify-start"
              >Username</label
            >
            <input
              type="username"
              name="username"
              id="username"
              class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 placeholder-gray-400"
              placeholder="thienphuoc"
              required
            />
          </div>
          <div>
            <label for="password" class="text-gray-600 mb-2 flex justify-start"
              >Password</label
            >
            <div class="flex justify-end items-center">
              <input
                v-bind:type="[showPassword ? 'text' : 'password']"
                name="password"
                id="password"
                v-model="password"
                class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 placeholder-gray-400 relative"
                placeholder="*******"
                maxlength="30"
                required
              />
              <span
                class="cursor-pointer w-6 h-6 text-gray-500 absolute mr-3"
                @click="toggleShowPassword"
                ><i
                  class="fa-regular"
                  :class="{
                    'fa-eye-slash': showPassword,
                    'fa-eye': !showPassword,
                  }"
                ></i
              ></span>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-between mt-6">
          <div class="flex items-center">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              class="text-primary focus:ring-0 rounded-sm cursor-pointer"
            />
            <label for="remember" class="text-gray-600 ml-3 cursor-pointer"
              >Remember me</label
            >
          </div>
          <a href="#" class="text-primary">Forgot password</a>
        </div>
        <div class="mt-4">
          <button
            type="submit"
            class="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
            @click="Login"
          >
            Login
          </button>
        </div>
      </form>

      <!-- login with -->
      <div class="mt-6 flex justify-center relative">
        <div class="text-gray-600 uppercase px-3 bg-white z-10 relative">
          Or login with
        </div>
        <div
          class="absolute left-0 top-3 w-full border-b-2 border-gray-200"
        ></div>
      </div>
      <div class="mt-4 flex gap-4">
        <a
          href="#"
          class="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700"
          >facebook</a
        >
        <a
          href="#"
          class="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500"
          >google</a
        >
      </div>
      <!-- ./login with -->

      <p class="mt-4 text-center text-gray-600">
        Don't have account?
        <a @click="navigateTo('/register')" class="text-primary cursor-pointer"
          >Register now</a
        >
      </p>
    </div>
  </div>
</template>

<script>
// import AuthenticationAPIs from "@/APIs/AuthenticationAPIs";

export default {
  name: "loginPage",

  data() {
    return {
      username: "",
      password: "",
      showPassword: false,
      data: [],
      token: "",
    };
  },
  mounted() {},
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    toggleShowPassword() {
      this.showPassword = !this.showPassword;
    },
    handleLogin(user) {
      this.$store.dispatch("auth/login", user).then(
        () => {
          this.$router.push("/home");
        },
        (error) => {
          alert(error);
        }
      );
    },
  },
};
</script>
