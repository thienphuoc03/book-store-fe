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
          v-for="book in books"
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
            <a href="#">
              <p
                class="uppercase font-medium text-base mb-2 text-gray-800 hover:text-primary transition truncate"
              >
                {{ book.name }}
              </p>
            </a>
            <div class="flex items-baseline mb-1 space-x-2">
              <p class="text-xl text-primary font-semibold">
                {{ book.price }} VNĐ
              </p>
              <p class="text-sm text-gray-400 line-through">
                {{ book.price }} VNĐ
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
          v-for="book in books"
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
            <a href="#">
              <h4
                class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition truncate"
              >
                {{ book.name }}
              </h4>
            </a>
            <div class="flex items-baseline mb-1 space-x-2">
              <p class="text-xl text-primary font-semibold">
                {{ book.price }} VND
              </p>
              <p class="text-sm text-gray-400 line-through">
                {{ book.price }} VND
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
      books: [],
      isLoading: false,
      id: null,
    };
  },
  mounted() {
    this.getAllBook();
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async getAllBook() {
      this.isLoading = true;
      BookAPIs.getAllBook(1, 5)
        .then((response) => {
          this.books = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
      this.isLoading = false;
    },
  },
};
</script>
