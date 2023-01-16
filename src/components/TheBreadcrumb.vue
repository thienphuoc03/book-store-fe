<template>
  <div class="container py-4 flex items-center gap-3">
    <a
      @click="navigateTo('/home')"
      class="text-primary text-base cursor-pointer"
    >
      <i class="fa-solid fa-house"></i>
    </a>
    <span class="text-sm text-gray-400">
      <i class="fa-solid fa-chevron-right"></i>
    </span>
    <p class="text-gray-600 font-medium">Profile</p>
  </div>

  <!-- <nav aria-label="breadcrumb" class="container py-4 flex items-center gap-3">
    <ol>
      <li v-for="(crumb, index) in crumbs" :key="index">
        <a :href="crumb.link">{{ crumb.text }}</a>
        <span v-if="index < crumbs.length - 1">/</span>
      </li>
    </ol>
  </nav> -->
</template>

<script>
import { ref } from "vue";

export default {
  name: "TheBreadcrumb",

  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const crumbs = ref(props.items);
    return { crumbs };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
};
</script>
