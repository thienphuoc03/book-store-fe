<template>
  <!-- product-detail -->
  <div class="container grid grid-cols-2 gap-6">
    <div>
      <img :src="book.avatar" alt="product" class="w-full max-w-[80%]" />
      <div class="grid grid-cols-5 gap-4 mt-4">
        <img
          :src="book.avatar"
          alt="product2"
          class="w-full cursor-pointer border border-primary" />
        <img
          :src="book.avatar"
          alt="product2"
          class="w-full cursor-pointer border" />
        <img
          :src="book.avatar"
          alt="product2"
          class="w-full cursor-pointer border" />
        <img
          :src="book.avatar"
          alt="product2"
          class="w-full cursor-pointer border" />
        <img
          :src="book.avatar"
          alt="product2"
          class="w-full cursor-pointer border" />
      </div>
    </div>

    <div class="text-left">
      <h2 class="text-3xl font-medium uppercase mb-2">{{ book.name }}</h2>
      <div class="flex items-center mb-4">
        <div class="flex gap-1 text-sm text-yellow-400">
          <span><i class="fa-solid fa-star"></i></span>
          <span><i class="fa-solid fa-star"></i></span>
          <span><i class="fa-solid fa-star"></i></span>
          <span><i class="fa-solid fa-star"></i></span>
          <span><i class="fa-solid fa-star"></i></span>
        </div>
        <div class="text-xs text-gray-500 ml-3">(150 Reviews)</div>
      </div>
      <div class="space-y-2">
        <p class="text-gray-800 font-semibold space-x-2">
          <span>Tình trạng: </span>
          <span class="text-green-600" v-if="book.quantity > 0">Còn hàng</span>
          <span class="text-red-600" v-else>Hết hàng</span>
        </p>
        <p class="space-x-2" v-for="author in book.authors" v-bind:key="author">
          <span class="text-gray-800 font-semibold">Tác giả: </span>
          <span class="text-gray-600">{{ author }}</span>
        </p>
        <p
          class="space-x-2"
          v-for="category in book.categories"
          v-bind:key="category">
          <span class="text-gray-800 font-semibold">Danh mục: </span>
          <span class="text-gray-600">{{ category }} <br /></span>
        </p>
        <p class="space-x-2">
          <span class="text-gray-800 font-semibold">SKU: </span>
          <span class="text-gray-600">BE45VGRT</span>
        </p>
      </div>
      <div class="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
        <p class="text-xl text-primary font-semibold">
          {{ $filters.toCurrency((book.price / 100) * 80) }}
        </p>
        <p class="text-base text-gray-400 line-through">
          {{ $filters.toCurrency(book.price) }}
        </p>
      </div>

      <div class="mt-4">
        <h3 class="text-sm text-gray-800 uppercase mb-1">Số lượng:</h3>
        <div
          class="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
          <button
            class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
            @click="decrement">
            -
          </button>
          <div class="h-8 w-8 text-base flex items-center justify-center">
            {{ quantity }}
          </div>
          <button
            class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
            @click="increment">
            +
          </button>
        </div>
      </div>

      <div class="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
        <a
          href@click="
              addOrderDetail((order = { id: book.id, price: book.price }))
            "
          class="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition">
          <i class="fa-solid fa-bag-shopping"></i> Add to cart
        </a>
        <a
          href="#"
          class="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition">
          <i class="fa-solid fa-heart"></i> Wishlist
        </a>
      </div>

      <div class="flex gap-3 mt-4">
        <a
          href="#"
          class="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
          <i class="fa-brands fa-facebook-f"></i>
        </a>
        <a
          href="#"
          class="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a
          href="#"
          class="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
          <i class="fa-brands fa-instagram"></i>
        </a>
      </div>
    </div>
  </div>
  <!-- ./product-detail -->

  <!-- description -->
  <div class="container pb-16">
    <h3
      class="text-2xl mt-4 border-b border-gray-200 font-roboto text-gray-800 pb-3 font-semibold">
      Mô tả sản phẩm
    </h3>
    <div class="w-full pt-6">
      <div class="text-gray-600 w-full text-left">
        <p>{{ book.description }}</p>
      </div>

      <table
        class="table-auto border-collapse w-3/4 text-left text-gray-600 text-sm mt-6">
        <tr>
          <th
            class="py-2 px-4 border border-gray-300 w-40 font-medium bg-gray-200">
            Công ty phát hành
          </th>
          <th class="py-2 px-4 border border-gray-300">1980 Books</th>
        </tr>
        <tr>
          <th
            class="py-2 px-4 border border-gray-300 w-40 font-medium bg-gray-200">
            Ngày xuất bản
          </th>
          <th class="py-2 px-4 border border-gray-300">{{ book.createdAt }}</th>
        </tr>
        <tr>
          <th
            class="py-2 px-4 border border-gray-300 w-40 font-medium bg-gray-200">
            Kích thước
          </th>
          <th class="py-2 px-4 border border-gray-300">13x20.5cm</th>
        </tr>
        <tr>
          <th
            class="py-2 px-4 border border-gray-300 w-40 font-medium bg-gray-200">
            Loại bìa
          </th>
          <th class="py-2 px-4 border border-gray-300">Bìa mềm</th>
        </tr>
        <tr>
          <th
            class="py-2 px-4 border border-gray-300 w-40 font-medium bg-gray-200">
            Số trang
          </th>
          <th class="py-2 px-4 border border-gray-300">436</th>
        </tr>
        <tr>
          <th
            class="py-2 px-4 border border-gray-300 w-40 font-medium bg-gray-200">
            Nhà xuất bản
          </th>
          <th class="py-2 px-4 border border-gray-300">
            {{ book.publishing_company }}
          </th>
        </tr>
      </table>
    </div>
  </div>
  <!-- ./description -->

  <!-- related product -->
  <div class="container pb-16">
    <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">
      Sản phẩm tương tự
    </h2>
    <div class="grid grid-cols-5 gap-6">
      <div
        v-for="book in relatedProduct"
        :key="book.id"
        class="bg-white shadow rounded overflow-hidden group">
        <div class="relative">
          <img
            :src="book.avatar"
            alt="product 1"
            class="w-full h-52 object-contain" />
          <div
            class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
            <a
              href="#"
              class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
              title="view product">
              <i class="fa-solid fa-magnifying-glass"></i>
            </a>
            <a
              href="#"
              class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
              title="add to wishlist">
              <i class="fa-solid fa-heart"></i>
            </a>
          </div>
        </div>
        <div class="pt-4 pb-3 px-4">
          <a href="#">
            <h4
              class="uppercase font-medium text-base mb-2 text-gray-800 hover:text-primary transition truncate"
              :title="book.name">
              {{ book.name }}
            </h4>
          </a>
          <div class="flex items-baseline mb-1 space-x-2">
            <p class="text-xl text-primary font-semibold">
              {{ $filters.toCurrency((book.price / 100) * 80) }}
            </p>
            <p class="text-sm text-gray-400 line-through">
              {{ $filters.toCurrency(book.price) }}
            </p>
          </div>
          <div class="flex items-center">
            <div class="flex gap-1 text-sm text-yellow-400">
              <span><i class="fa-solid fa-star"></i></span>
              <span><i class="fa-solid fa-star"></i></span>
              <span><i class="fa-solid fa-star"></i></span>
              <span><i class="fa-solid fa-star"></i></span>
              <span><i class="fa-solid fa-star"></i></span>
            </div>
            <div class="text-xs text-gray-500 ml-3">(150)</div>
          </div>
        </div>
        <a
          @click="addOrderDetail((order = { id: book.id, price: book.price }))"
          class="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
          >Add to cart</a
        >
      </div>
    </div>
  </div>
  <!-- ./related product -->
</template>

<script>
import BookAPIs from '@/APIs/BookAPIs';
import OrderDetailAPIs from '../../APIs/OrderDetailAPIs';

export default {
  name: 'ProductPage',

  data() {
    return {
      book: [],
      relatedProduct: [],
      isLoading: false,
      quantity: 0,
    };
  },
  mounted() {
    this.getBookById();
    this.getBookByCategoryId();
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },

    increment() {
      this.quantity++;
    },
    decrement() {
      if (this.quantity > 0) {
        this.quantity--;
      }
    },

    async getBookById() {
      BookAPIs.getBookById(this.$route.params.id)
        .then(response => {
          this.book = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },

    async getBookByCategoryId() {
      BookAPIs.getBookByCategoryId(1, 1, 5)
        .then(response => {
          this.relatedProduct = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },

    async addOrderDetail(order) {
      OrderDetailAPIs.addOrderDetail(order)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
};
</script>
