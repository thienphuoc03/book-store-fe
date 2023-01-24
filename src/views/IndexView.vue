<template>
  <TheHeader />
  <TheNavBar />
  <TheBreadcrumb />
  <router-view />
  <TheFooter />
</template>
<script>
// @ is an alias to /src
import TheHeader from "@/views/user/components/TheHeader.vue";
import TheNavBar from "@/views/user/components/TheNavBar.vue";
import TheBreadcrumb from "@/views/user/components/TheBreadcrumb.vue";
import TheFooter from "@/views/user/components/TheFooter.vue";

export default {
  name: "IndexView",
  components: {
    TheHeader,
    TheNavBar,
    TheBreadcrumb,
    TheFooter,
  },
};
</script>
