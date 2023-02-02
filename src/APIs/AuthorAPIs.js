import axios from 'axios';
import BaseAPIs from './BaseAPIs';

class AuthorAPIs {
  endpoints = {
    authorUrl: BaseAPIs.baseURL + '/authors',
  };

  async getAllAuthor() {
    try {
      const response = await axios.get(this.endpoints.authorUrl);

      return Promise.resolve(response);
    } catch (error) {
      console.log('Call API get all error', error);
      return Promise.reject(error);
    }
  }

  async addAuthor(authorName) {
    try {
      const response = await axios.post(this.endpoints.authorUrl, {
        name: authorName,
      });

      return Promise.resolve(response);
    } catch (error) {
      console.log('Call API get all error', error);
      return Promise.reject(error);
    }
  }

  async updateAuthor(id, authorName) {
    try {
      const response = await axios.put(this.endpoints.authorUrl + '/' + id, {
        name: authorName,
      });

      return Promise.resolve(response);
    } catch (error) {
      console.log('Call API get all error', error);
      return Promise.reject(error);
    }
  }

  async deleteAuthor(id) {
    try {
      const response = await axios.delete(this.endpoints.authorUrl + '/' + id);

      return Promise.resolve(response);
    } catch (error) {
      console.log('Call API get all error', error);
      return Promise.reject(error);
    }
  }
}

export default new AuthorAPIs();
