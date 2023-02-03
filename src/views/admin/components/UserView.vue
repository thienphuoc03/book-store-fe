<template>
  <div class="flex flex-wrap">
    <div class="w-full px-4">
      <div
        class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
      >
        <user-item />
      </div>
    </div>
  </div>
</template>
<script>
import UserItem from "@/views/admin/components/User/UserItem.vue";

export default {
  components: {
    UserItem,
  },
};
</script>
