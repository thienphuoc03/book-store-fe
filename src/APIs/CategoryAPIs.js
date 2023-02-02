import axios from 'axios';
import BaseAPIs from './BaseAPIs';

class CategoryAPIs {
  endpoints = {
    categoryUrl: BaseAPIs.baseURL + '/categories',
  };

  async getAllCategory() {
    try {
      const response = await axios.get(this.endpoints.categoryUrl);

      return Promise.resolve(response);
    } catch (error) {
      console.log('Call API get all error', error);
      return Promise.reject(error);
    }
  }

  async addCategory(categoryName) {
    try {
      const response = await axios.post(this.endpoints.categoryUrl, {
        name: categoryName,
      });

      return Promise.resolve(response);
    } catch (error) {
      console.log('Call API get all error', error);
      return Promise.reject(error);
    }
  }

  async updateCategory(id, categoryName) {
    try {
      const response = await axios.put(this.endpoints.categoryUrl`/${id}`, {
        name: categoryName,
      });

      return Promise.resolve(response);
    } catch (error) {
      console.log('Call API get all error', error);
      return Promise.reject(error);
    }
  }

  async deleteCategory(id) {
    try {
      const response = await axios.delete(this.endpoints.categoryUrl`/${id}`);

      return Promise.resolve(response);
    } catch (error) {
      console.log('Call API get all error', error);
      return Promise.reject(error);
    }
  }
}

export default new CategoryAPIs();
