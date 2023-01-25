<template>
  <div>
    <sidebar />
    <div class="relative md:ml-64 bg-blueGray-100">
      <admin-navbar />
      <header-stats />
      <div class="px-4 md:px-10 mx-auto w-full -m-24">
        <router-view />
        <footer-admin />
      </div>
    </div>
  </div>
</template>
<script>
import AdminNavbar from "@/views/admin/components/Navbars/AdminNavbar.vue";
import Sidebar from "@/views/admin/components/Sidebar/SidebarView.vue";
import HeaderStats from "@/views/admin/components/Headers/HeaderStats.vue";
import FooterAdmin from "@/views/admin/components/Footers/FooterAdmin.vue";
export default {
  name: "AdminLayout",
  components: {
    AdminNavbar,
    Sidebar,
    HeaderStats,
    FooterAdmin,
  },
};
</script>
