<template>
  <!-- wrapper -->
  <div class="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
    <!-- sidebar -->
    <div class="col-span-3">
      <div class="px-4 py-3 shadow flex items-center gap-4">
        <div class="flex-shrink-0">
          <img
            :src="userInfo.avatar"
            alt="profile"
            class="rounded-full w-14 h-14 border border-gray-200 p-1 object-cover" />
        </div>
        <div class="flex-grow">
          <p class="text-gray-600">Hello,</p>
          <h4 class="text-gray-800 font-medium">{{ userInfo.name }}</h4>
        </div>
      </div>

      <div
        class="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
        <div class="space-y-1 pl-8">
          <a
            href="#"
            class="relative text-primary block font-medium capitalize transition">
            <span class="absolute -left-8 top-0 text-base">
              <i class="fa-regular fa-address-card"></i>
            </span>
            Manage account
          </a>
          <a
            href="#"
            class="relative hover:text-primary block capitalize transition">
            Profile information
          </a>
          <a
            href="#"
            class="relative hover:text-primary block capitalize transition">
            Manage addresses
          </a>
          <a
            href="#"
            class="relative hover:text-primary block capitalize transition">
            Change password
          </a>
        </div>

        <div class="space-y-1 pl-8 pt-4">
          <a
            href="#"
            class="relative hover:text-primary block font-medium capitalize transition">
            <span class="absolute -left-8 top-0 text-base">
              <i class="fa-solid fa-box-archive"></i>
            </span>
            My order history
          </a>
          <a
            href="#"
            class="relative hover:text-primary block capitalize transition">
            My returns
          </a>
          <a
            href="#"
            class="relative hover:text-primary block capitalize transition">
            My Cancellations
          </a>
          <a
            href="#"
            class="relative hover:text-primary block capitalize transition">
            My reviews
          </a>
        </div>

        <div class="space-y-1 pl-8 pt-4">
          <a
            href="#"
            class="relative hover:text-primary block font-medium capitalize transition">
            <span class="absolute -left-8 top-0 text-base">
              <i class="fa-regular fa-credit-card"></i>
            </span>
            Payment methods
          </a>
          <a
            href="#"
            class="relative hover:text-primary block capitalize transition">
            voucher
          </a>
        </div>

        <div class="space-y-1 pl-8 pt-4">
          <a
            href="#"
            class="relative hover:text-primary block font-medium capitalize transition">
            <span class="absolute -left-8 top-0 text-base">
              <i class="fa-regular fa-heart"></i>
            </span>
            My wishlist
          </a>
        </div>

        <div class="space-y-1 pl-8 pt-4">
          <a
            @click="logout"
            class="relative hover:text-primary block font-medium capitalize transition cursor-pointer">
            <span class="absolute -left-8 top-0 text-base">
              <i class="fa-solid fa-right-from-bracket"></i>
            </span>
            Logout
          </a>
        </div>
      </div>
    </div>
    <!-- ./sidebar -->

    <!-- info -->
    <div class="col-span-9 shadow rounded px-6 pt-5 pb-7">
      <h4 class="text-lg font-medium capitalize mb-4">Thông tin cá nhân</h4>
      <div class="space-y-4">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label for="first">First name</label>
            <input
              type="text"
              name="first"
              id="first"
              class="input-box"
              :value="userInfo.name" />
          </div>
          <div>
            <label for="last">Last name</label>
            <input
              type="text"
              name="last"
              id="last"
              class="input-box"
              :value="userInfo.name" />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label for="birthday">Birthday</label>
            <input
              type="date"
              name="birthday"
              id="birthday"
              class="input-box"
              :value="userInfo.dob" />
          </div>
          <div>
            <label for="gender">Gender</label>
            <select name="gender" id="gender" class="input-box">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label for="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              class="input-box"
              :value="userInfo.email" />
          </div>
          <div>
            <label for="phone">Phone number</label>
            <input
              type="text"
              name="phone"
              id="phone"
              class="input-box"
              :value="userInfo.phoneNumber" />
          </div>
        </div>
      </div>

      <div class="mt-4">
        <button
          type="submit"
          class="py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium">
          save changes
        </button>
      </div>
    </div>
    <!-- ./info -->
  </div>
  <!-- ./wrapper -->
</template>
<script>
import UserAPIs from '@/APIs/UserAPIs';
import { mapActions } from 'vuex';

export default {
  name: 'profilePage',

  data() {
    return {
      user: {},
      userInfo: [],
    };
  },
  // mounted() {
  //   this.getUserById();
  // },
  computed: {
    currentUser() {
      return this.$store.getters.isLoggedIn;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/auth/login');
    } else {
      this.user = this.$store.state.user;

      this.getUserById();
    }
  },
  methods: {
    async getUserById() {
      UserAPIs.getUserById(this.user.id)
        .then(response => {
          this.userInfo = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },

    ...mapActions(['logout']),
  },
};
</script>
