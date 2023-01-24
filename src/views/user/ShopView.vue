<template>
  <!-- shop wrapper -->
  <div class="container grid grid-cols-4 gap-6 pt-4 pb-16 items-start">
    <!-- sidebar -->
    <div class="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden">
      <div class="divide-y divide-gray-200 space-y-5">
        <div>
          <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">
            Danh mục
          </h3>
          <div class="space-y-2">
            <div
              v-for="category in categories"
              :key="category.id"
              class="flex items-center"
            >
              <input
                type="checkbox"
                name="cat-1"
                id="cat-1"
                class="text-primary focus:ring-0 rounded-sm cursor-pointer"
              />
              <label for="cat-1" class="text-gray-600 ml-3 cusror-pointer">{{
                category.name
              }}</label>
              <div class="ml-auto text-gray-600 text-sm">(15)</div>
            </div>
          </div>
        </div>

        <div class="pt-4">
          <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">
            Tác giả
          </h3>
          <div class="space-y-2">
            <div
              v-for="author in authors"
              :key="author.id"
              class="flex items-center"
            >
              <input
                type="checkbox"
                name="brand-1"
                id="brand-1"
                class="text-primary focus:ring-0 rounded-sm cursor-pointer"
              />
              <label for="brand-1" class="text-gray-600 ml-3 cusror-pointer">{{
                author.name
              }}</label>
              <div class="ml-auto text-gray-600 text-sm">(15)</div>
            </div>
          </div>
        </div>

        <div class="pt-4">
          <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">Giá</h3>
          <div class="mt-4 flex items-center">
            <input
              type="text"
              name="min"
              id="min"
              class="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
              placeholder="min"
            />
            <span class="mx-3 text-gray-500">-</span>
            <input
              type="text"
              name="max"
              id="max"
              class="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
              placeholder="max"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- ./sidebar -->

    <!-- products -->
    <div class="col-span-3">
      <div class="flex items-center mb-4">
        <select
          name="sort"
          id="sort"
          class="w-44 text-sm text-gray-600 py-3 px-4 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary"
        >
          <option value="">Mặc định</option>
          <option value="price-low-to-high">Giá thấp tới cao</option>
          <option value="price-high-to-low">Giá cao tới thấp</option>
          <option value="latest">Mới nhất</option>
        </select>

        <div class="flex gap-2 ml-auto">
          <div
            class="border border-primary w-10 h-9 flex items-center justify-center text-white bg-primary rounded cursor-pointer"
          >
            <i class="fa-solid fa-grip-vertical"></i>
          </div>
          <div
            class="border border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600 rounded cursor-pointer"
          >
            <i class="fa-solid fa-list"></i>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-4 gap-6">
        <div
          v-for="book in books"
          :key="book.id"
          class="bg-white shadow rounded overflow-hidden group"
        >
          <div class="relative">
            <img
              :src="book.avatar"
              alt="product 1"
              class="w-full h-52 object-cover"
            />
            <div
              class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
            >
              <a
                href="#"
                class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                title="view product"
              >
                <i class="fa-solid fa-magnifying-glass"></i>
              </a>
              <a
                href="#"
                class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                title="add to wishlist"
              >
                <i class="fa-solid fa-heart"></i>
              </a>
            </div>
          </div>
          <div class="pt-4 pb-3 px-4">
            <a @click="navigateTo(`/product/${book.id}`)">
              <h4
                class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition truncate cursor-pointer"
                :title="book.name"
              >
                {{ book.name }}
              </h4>
            </a>
            <div class="flex items-baseline mb-1 space-x-2">
              <p class="text-xl text-primary font-semibold">
                {{ toCurrency((book.price / 100) * 80) }}
              </p>
              <p class="text-sm text-gray-400 line-through">
                {{ toCurrency(book.price) }}
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
            href="#"
            class="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >Add to cart</a
          >
        </div>
      </div>
    </div>
    <!-- ./products -->
  </div>
  <!-- ./shop wrapper -->
</template>

<script>
import CategoryAPIs from "@/APIs/CategoryAPIs";
import BookAPIs from "@/APIs/BookAPIs";
import AuthorAPIs from "@/APIs/AuthorAPIs";

export default {
  name: "ShopPage",

  data() {
    return {
      categories: [],
      books: [],
      authors: [],
      isLoading: false,
    };
  },
  mounted() {
    this.getAllCategory();
    this.getAllBook();
    this.getAllAuthor();
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },

    async getAllCategory() {
      this.isLoading = true;
      CategoryAPIs.getAllCategory()
        .then((response) => {
          this.categories = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
      this.isLoading = false;
    },

    async getAllBook() {
      this.isLoading = true;
      BookAPIs.getAllBook(1, 12)
        .then((response) => {
          this.books = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
      this.isLoading = false;
    },

    async getAllAuthor() {
      this.isLoading = true;
      AuthorAPIs.getAllAuthor()
        .then((response) => {
          this.authors = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
      this.isLoading = false;
    },

    toCurrency(value) {
      if (typeof value !== "number") {
        return value;
      }

      let formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "VND",
        minimumFractionDigits: 0,
      });
      return formatter.format(value);
    },
  },
};
</script>
