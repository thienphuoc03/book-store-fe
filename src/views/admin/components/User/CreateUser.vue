<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded bg-white">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center justify-end">
        <div
          class="relative w-full px-4 max-w-full flex justify-center items-center">
          <h3 class="font-semibold text-lg text-blueGray-700">Create User</h3>
        </div>
      </div>
    </div>

    <div class="block w-full overflow-x-auto">
      <form @submit.prevent="CreateUser" autocomplete="off" class="p-3">
        <div class="space-y-4">
          <div>
            <label for="avatar" class="text-gray-600 mb-2 flex justify-start"
              >Avatar:</label
            >
            <input
              type="text"
              name="avatar"
              id="avatar"
              v-model="avatar"
              class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 placeholder-gray-400"
              placeholder="avatar..."
              maxlength="60"
              required />
          </div>
          <div>
            <label for="name" class="text-gray-600 mb-2 flex justify-start"
              >Name:</label
            >
            <input
              type="text"
              name="name"
              id="name"
              v-model="name"
              class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 placeholder-gray-400"
              placeholder="name..."
              maxlength="60"
              required />
          </div>
          <div>
            <label for="username" class="text-gray-600 mb-2 flex justify-start"
              >Username:</label
            >
            <input
              type="text"
              name="username"
              id="username"
              v-model="username"
              class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 placeholder-gray-400"
              placeholder="username..."
              maxlength="60"
              required />
          </div>
          <div>
            <label for="password" class="text-gray-600 mb-2 flex justify-start"
              >Password:</label
            >
            <input
              type="password"
              name="password"
              id="password"
              v-model="password"
              class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 placeholder-gray-400"
              placeholder="password..."
              maxlength="60"
              required />
          </div>
          <div>
            <label for="dob" class="text-gray-600 mb-2 flex justify-start"
              >Date of birth:</label
            >
            <input
              type="date"
              name="dob"
              id="dob"
              v-model="dob"
              class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 placeholder-gray-400"
              placeholder="dob..."
              maxlength="60"
              required />
          </div>
          <div>
            <label for="gender" class="text-gray-600 mb-2 flex justify-start"
              >Gender:</label
            >
            <select
              name="gender"
              id="gender"
              class="block w-36 border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0">
              <option value="0">Female</option>
              <option value="1">Male</option>
              <option value="2">Other</option>
            </select>
          </div>
          <div>
            <label
              for="phoneNumber"
              class="text-gray-600 mb-2 flex justify-start"
              >Phone Number:</label
            >
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              v-model="phoneNumber"
              class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 placeholder-gray-400"
              placeholder="phoneNumber..."
              maxlength="60"
              required />
          </div>
          <div>
            <label for="email" class="text-gray-600 mb-2 flex justify-start"
              >Email:</label
            >
            <input
              type="email"
              name="email"
              id="email"
              v-model="email"
              class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 placeholder-gray-400"
              placeholder="email..."
              maxlength="60"
              required />
          </div>
          <div>
            <label for="address" class="text-gray-600 mb-2 flex justify-start"
              >Address:</label
            >
            <input
              type="text"
              name="address"
              id="address"
              v-model="address"
              class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 placeholder-gray-400"
              placeholder="address..."
              maxlength="60"
              required />
          </div>
        </div>
        <div class="mt-4 justify-around items-center flex">
          <button
            @click="this.$router.push('/users')"
            class="block w-32 py-2 text-center text-white bg-gray-300 border-none rounded hover:bg-gray-400 transition uppercase font-roboto font-medium">
            Trở về
          </button>
          <button
            type="submit"
            class="block w-32 py-2 text-center text-white bg-green-400 border border-green-400 rounded hover:bg-green-400 transition uppercase font-roboto font-medium">
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import UserAPIs from '@/APIs/UserAPIs';

export default {
  data() {
    return {
      newUser: {
        avatar: '',
        name: '',
        username: '',
        password: '',
        dob: '',
        gender: '',
        phoneNumber: '',
        email: '',
        address: '',
      },
    };
  },
  methods: {
    async CreateUser() {
      UserAPIs.addUser(this.newUser)
        .then(() => {
          alert('Thêm mới thành công!');
          this.$route.push('/users');
        })
        .catch(error => {
          alert('Lỗi!!!');
          console.log(error);
        });
    },
  },
};
</script>
