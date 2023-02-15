<template>
  <div>
    <div class="text-xs leading-3">Cart</div>
    <ul>
      <li v-for="(item, index) in cartItems" :key="index">
        {{ item.name }} - {{ item.price }}
      </li>
    </ul>
  </div>
  <div
    class="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
    {{ count }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartItems: [],
      count: 0,
    };
  },
  mounted() {
    this.count = this.cartItems.length;
  },
  methods: {
    addToCart(item) {
      this.cartItems.push(item);
    },
    emptyCart() {
      this.cartItems = [];
    },
  },
};
</script>
