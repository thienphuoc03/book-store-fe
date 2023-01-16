<template>
  <div class="contain py-16">
    <div class="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
      <a
        @click="navigateTo('/')"
        class="cursor-pointer w-full flex justify-start hover:text-red-500"
        ><span class="w-6 h-6"
          ><i class="fa-solid fa-house" title="Home"></i></span
      ></a>
      <h2 class="text-3xl uppercase font-medium mb-2">Sign Up</h2>
      <form action="#" method="post" autocomplete="off">
        <div class="space-y-2">
          <div class="pb-3">
            <label for="name" class="text-gray-600 mb-2 flex justify-start"
              >Full Name</label
            >
            <input
              type="text"
              name="name"
              id="name"
              class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 placeholder-gray-400"
              placeholder="fulan fulana"
              required
            />
          </div>
          <div class="pb-3">
            <label for="email" class="text-gray-600 mb-2 flex justify-start"
              >Email address</label
            >
            <input
              type="email"
              name="email"
              id="email"
              class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 placeholder-gray-400"
              placeholder="youremail.@domain.com"
              required
            />
          </div>
          <div class="pb-3">
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
          <div class="pb-3">
            <label
              for="confirmPassword"
              class="text-gray-600 mb-2 flex justify-start"
              >Confirm password</label
            >
            <div class="flex justify-end items-center">
              <input
                v-bind:type="[showConfirmPassword ? 'text' : 'password']"
                name="confirmPassword"
                id="confirmPassword"
                v-model="confirmPassword"
                class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 placeholder-gray-400 relative"
                placeholder="*******"
                maxlength="30"
                required
              />
              <span
                class="cursor-pointer w-6 h-6 text-gray-500 absolute mr-3"
                @click="toggleShowConfirmPassword"
                ><i
                  class="fa-regular"
                  :class="{
                    'fa-eye-slash': showConfirmPassword,
                    'fa-eye': !showConfirmPassword,
                  }"
                ></i
              ></span>
            </div>
          </div>
          <div class="invalid-feedback text-sm text-rose-500">
            <p v-if="!confirmError" class="h-5"></p>
            <p v-if="confirmError">Passwords do not match</p>
          </div>
        </div>
        <div class="mt-6">
          <div class="flex items-center">
            <input
              type="checkbox"
              name="aggrement"
              id="aggrement"
              class="text-primary focus:ring-0 rounded-sm cursor-pointer"
            />
            <label for="aggrement" class="text-gray-600 ml-3 cursor-pointer"
              >I have read and agree to the
              <a href="#" class="text-primary">terms & conditions</a></label
            >
          </div>
        </div>
        <div class="mt-4">
          <button
            type="submit"
            class="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
          >
            create account
          </button>
        </div>
      </form>

      <!-- login with -->
      <div class="mt-6 flex justify-center relative">
        <div class="text-gray-600 uppercase px-3 bg-white z-10 relative">
          Or signup with
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
        Already have account?
        <a @click="navigateTo('/login')" class="text-primary cursor-pointer"
          >Login now</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "registerPage",

  data() {
    return {
      password: "",
      confirmPassword: "",
      confirmError: false,
      showPassword: false,
      showConfirmPassword: false,
    };
  },
  watch: {
    password(value) {
      this.checkPasswordMatch(value);
    },
    confirmPassword(value) {
      this.checkPasswordMatch(value);
    },
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    checkPasswordMatch() {
      if (this.password !== this.confirmPassword) {
        this.confirmError = true;
      } else {
        this.confirmError = false;
      }
    },
    toggleShowPassword() {
      this.showPassword = !this.showPassword;
    },
    toggleShowConfirmPassword() {
      this.showConfirmPassword = !this.showConfirmPassword;
    },
  },
};
</script>
