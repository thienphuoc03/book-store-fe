<template>
  <div class="flex flex-wrap">
    <div class="w-full px-4">
      <div
        class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <category-item />
      </div>
    </div>
  </div>
</template>
<script>
import CategoryItem from '@/views/admin/components/Category/CategoryItem.vue';

export default {
  components: {
    CategoryItem,
  },
};
</script>
