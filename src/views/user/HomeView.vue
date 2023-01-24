<template>
  <div>
    <!-- banner -->
    <div class="bg-cover bg-no-repeat bg-center py-36">
      <div class="container">
        <h1 class="text-6xl text-gray-800 font-medium mb-4 capitalize">
          slide
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          <br />
          accusantium perspiciatis, sapiente magni eos dolorum ex quos dolores
          odio
        </p>
      </div>
    </div>
    <!-- ./banner -->

    <!-- new arrival -->
    <div class="container pb-16">
      <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">
        Sản phẩm mới
      </h2>
      <div class="grid grid-cols-5 gap-6">
        <div
          v-for="book in newBooks"
          :key="book.id"
          class="bg-white shadow rounded overflow-hidden group"
        >
          <div class="relative">
            <img
              :src="book.avatar"
              alt="product 1"
              class="w-full h-52 object-contain"
            />
            <div
              class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
            >
              <a
                @click="navigateTo(`/product/${book.id}`)"
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
              <p
                class="uppercase font-medium text-base mb-2 text-gray-800 hover:text-primary transition truncate cursor-pointer"
                :title="book.name"
              >
                {{ book.name }}
              </p>
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
    <!-- ./new arrival -->

    <!-- ads -->
    <div class="container pb-16">
      <a href="#">
        <img
          src="../../assets/images/images/offer.jpg"
          alt="ads"
          class="w-full"
        />
      </a>
    </div>
    <!-- ./ads -->

    <!-- product -->
    <div class="container pb-16">
      <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">
        Sản phẩm bán chạy
      </h2>
      <div class="grid grid-cols-5 gap-6">
        <div
          v-for="book in bestSellingBooks"
          :key="book.id"
          class="bg-white shadow rounded overflow-hidden group"
        >
          <div class="relative">
            <img
              :src="book.avatar"
              alt="product 1"
              class="w-full h-52 object-contain"
            />
            <div
              class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
            >
              <a
                @click="navigateTo(`/product/${book.id}`)"
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
                class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition truncate"
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
    <!-- ./product -->
  </div>
</template>

<script>
import BookAPIs from "@/APIs/BookAPIs";

export default {
  name: "HomePage",

  data() {
    return {
      newBooks: [],
      bestSellingBooks: [],
      isLoading: false,
      id: null,
    };
  },
  mounted() {
    this.getNewBook();
    this.getBestSellingBook();
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },

    async getNewBook() {
      this.isLoading = true;
      BookAPIs.getAllBook(1, 5, "createdAt")
        .then((response) => {
          this.newBooks = response.data;
          console.log(this.newBooks);
        })
        .catch((error) => {
          console.log(error);
        });
      this.isLoading = false;
    },

    async getBestSellingBook() {
      this.isLoading = true;
      BookAPIs.getAllBook(1, 5, "name")
        .then((response) => {
          this.bestSellingBooks = response.data;
          console.log(this.bestSellingBooks);
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
