<template>
  <TheHeader />
  <TheNavBar />
  <TheBreadcrumb />
  <router-view />
  <TheFooter />
</template>
<script>
// @ is an alias to /src
import TheHeader from '@/components/TheHeader.vue';
import TheNavBar from '@/components/TheNavBar.vue';
import TheBreadcrumb from '@/components/TheBreadcrumb.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  name: 'IndexView',
  components: {
    TheHeader,
    TheNavBar,
    TheBreadcrumb,
    TheFooter,
  },
};
</script>
