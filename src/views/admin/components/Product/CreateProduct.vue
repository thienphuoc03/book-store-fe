<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded bg-white">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center justify-end">
        <div
          class="relative w-full px-4 max-w-full flex justify-center items-center">
          <h3 class="font-semibold text-lg text-blueGray-700">Create Book</h3>
        </div>
      </div>
    </div>

    <div class="block w-full overflow-x-auto">
      <!-- Projects table -->
      <form @submit.prevent="CreateBook" autocomplete="off" class="p-3">
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
            <label
              for="categories"
              class="text-gray-600 mb-2 flex justify-start"
              >Categories:</label
            >
            <input
              type="text"
              name="categories"
              id="categories"
              v-model="categories"
              class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 placeholder-gray-400"
              placeholder="categories..."
              maxlength="60"
              required />
          </div>
          <div>
            <label for="author" class="text-gray-600 mb-2 flex justify-start"
              >Author:</label
            >
            <input
              type="author"
              name="author"
              id="author"
              v-model="author"
              class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 placeholder-gray-400"
              placeholder="author..."
              maxlength="60"
              required />
          </div>
          <div>
            <label
              for="publishing_company"
              class="text-gray-600 mb-2 flex justify-start"
              >Publishing Company:</label
            >
            <input
              type="text"
              name="publishing_company"
              id="publishing_company"
              v-model="publishing_company"
              class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 placeholder-gray-400"
              placeholder="publishing_company..."
              maxlength="60"
              required />
          </div>
          <div>
            <label for="price" class="text-gray-600 mb-2 flex justify-start"
              >Price:</label
            >
            <input
              type="number"
              name="price"
              id="price"
              v-model="price"
              class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 placeholder-gray-400"
              placeholder="price..."
              maxlength="60"
              required />
          </div>
          <div>
            <label for="quantity" class="text-gray-600 mb-2 flex justify-start"
              >Quantity:</label
            >
            <input
              type="text"
              name="quantity"
              id="quantity"
              v-model="quantity"
              class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 placeholder-gray-400"
              placeholder="quantity..."
              maxlength="60"
              required />
          </div>
        </div>
        <div class="mt-4 justify-around items-center flex">
          <button
            @click="this.$router.push('/products')"
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
import BookAPIs from '@/APIs/BookAPIs';

export default {
  data() {
    return {
      newBook: {
        avatar: '',
        name: '',
        categories: [],
        author: [],
        publishing_company: '',
        description: '',
        price: 0,
        quantity: 0,
      },
    };
  },
  methods: {
    async CreateBook() {
      BookAPIs.addBook(this.newBook)
        .then(() => {
          alert('Thêm mới thành công!');
          this.$route.push('/product');
        })
        .catch(error => {
          alert('Lỗi!!!');
          console.log(error);
        });
    },
  },
};
</script>
