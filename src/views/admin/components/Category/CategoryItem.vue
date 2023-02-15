<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded bg-white">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center justify-end">
        <div
          class="relative w-full px-4 max-w-full flex justify-center items-center">
          <h3 class="font-semibold text-lg text-blueGray-700">
            Category Management
          </h3>
        </div>
        <div
          class="py-1 px-2 bg-green-500 hover:bg-green-400 rounded-md text-white">
          <a @click="showModalCreate = true" class="cursor-pointer">
            <i class="fa-solid fa-plus pr-1"></i>
            Add
          </a>
        </div>
      </div>
    </div>

    <div
      v-if="!showModalCreate && !showModalUpdate"
      class="block w-full overflow-x-auto">
      <!-- Projects table -->
      <table class="items-center w-full bg-transparent border-collapse">
        <thead>
          <tr>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center bg-blueGray-50 text-blueGray-500 border-blueGray-100">
              ID
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center bg-blueGray-50 text-blueGray-500 border-blueGray-100">
              Name
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center bg-blueGray-50 text-blueGray-500 border-blueGray-100">
              Created At
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center bg-blueGray-50 text-blueGray-500 border-blueGray-100">
              Created By
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center bg-blueGray-50 text-blueGray-500 border-blueGray-100">
              Modify At
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center bg-blueGray-50 text-blueGray-500 border-blueGray-100">
              Modify By
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center bg-blueGray-50 text-blueGray-500 border-blueGray-100">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="category in categories"
            :key="category.id"
            class="text-left">
            <th
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <span class="ml-3 font-bold text-blueGray-600">
                {{ category.id }}
              </span>
            </th>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              {{ category.name }}
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              {{ $filters.formatDate(category.createdAt) }}
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              {{ category.createdBy }}
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              {{ $filters.formatDate(category.modifyAt) }}
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              {{ category.modifyBy }}
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
              <div
                class="bg-white text-base z-50 float-left py-2 list-none text-left flex">
                <a
                  @click="ModalUpdate(category)"
                  class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:bg-gray-100 cursor-pointer">
                  <i class="fa-solid fa-pen-to-square text-yellow-500 pr-2"></i>
                  Edit
                </a>
                <a
                  @click="DeleteCategory(category.id)"
                  class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:bg-gray-100 cursor-pointer">
                  <i class="fa-solid fa-trash text-red-500 pr-2"></i>
                  Delete
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- modal create -->
    <div v-if="showModalCreate" class="w-full p-4">
      <form @submit.prevent="CreateCategory" autocomplete="off">
        <div class="space-y-2">
          <div>
            <label
              for="categoryName"
              class="text-gray-600 mb-2 flex justify-start"
              >Nhập tên danh mục:</label
            >
            <input
              type="text"
              name="categoryName"
              id="categoryName"
              v-model="categoryName"
              class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 placeholder-gray-400"
              placeholder="Tên danh mục..."
              maxlength="60"
              required />
          </div>
        </div>
        <div class="mt-4 justify-around items-center flex">
          <button
            @click="showModalCreate = false"
            class="block w-32 py-2 text-center text-white bg-gray-300 border-none rounded hover:bg-gray-400 transition uppercase font-roboto font-medium">
            Trở về
          </button>
          <button
            type="submit"
            class="block w-32 py-2 text-center text-white bg-green-400 border border-green-400 rounded hover:bg-green-400 transition uppercase font-roboto font-medium">
            Save
          </button>
        </div>
      </form>
    </div>

    <!-- modal update -->
    <div v-if="showModalUpdate" class="w-full p-4">
      <form @submit.prevent="UpdateCategory()" autocomplete="off">
        <div class="space-y-2">
          <div>
            <label
              for="categoryName"
              class="text-gray-600 mb-2 flex justify-start"
              >Nhập tên danh mục:</label
            >
            <input
              type="text"
              name="categoryName"
              id="categoryName"
              @input="categoryName = $event.target.value"
              class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 placeholder-gray-400"
              :value="categoryUpdate.name"
              maxlength="60" />
          </div>
        </div>
        <div class="mt-4 justify-around items-center flex">
          <button
            @click="showModalUpdate = false"
            class="block w-32 py-2 text-center text-white bg-gray-300 border-none rounded hover:bg-gray-400 transition uppercase font-roboto font-medium">
            Trở về
          </button>
          <button
            type="submit"
            class="block w-32 py-2 text-center text-white bg-green-400 border border-green-400 rounded hover:bg-green-400 transition uppercase font-roboto font-medium">
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import CategoryAPIs from '@/APIs/CategoryAPIs';

export default {
  name: 'categoryItem',

  data() {
    return {
      categories: [],
      showModalCreate: false,
      showModalUpdate: false,
      categoryName: '',
      categoryUpdate: {
        id: null,
        name: null,
      },
    };
  },
  computed: {},
  mounted() {
    this.getAllCategory();
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },

    async getAllCategory() {
      CategoryAPIs.getAllCategory()
        .then(response => {
          this.categories = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },

    async CreateCategory() {
      CategoryAPIs.addCategory(this.categoryName)
        .then(() => {
          alert('Thêm mới thành công!');
          this.$route.push('/categories');
        })
        .catch(error => {
          alert('Lỗi!!!');
          console.log(error);
        });
    },

    async UpdateCategory(id) {
      CategoryAPIs.updateCategory(id, this.categoryName)
        .then(() => {
          alert('Cập nhật thành công!');
          this.$route.push('/categories');
        })
        .catch(error => {
          alert('Lỗi!!!');
          console.log(error);
        });
    },

    async DeleteCategory(id) {
      if (confirm('You want to delete the category?')) {
        CategoryAPIs.deleteCategory(id)
          .then(() => {
            alert('Xóa thành công!');
            this.$route.push('/categories');
          })
          .catch(error => {
            alert('Lỗi!!!');
            console.log(error);
          });
      }
    },

    ModalUpdate(category) {
      this.showModalUpdate = true;
      this.categoryUpdate = category;
    },
  },
};
</script>
