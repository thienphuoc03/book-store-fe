import axios from 'axios';
import BaseAPIs from './BaseAPIs';

class BookAPIs {
  endpoints = {
    bookUrl: BaseAPIs.baseURL + '/books',
  };

  async getAllBook(page, size, sortBy) {
    try {
      const response = await axios.get(this.endpoints.bookUrl, {
        params: {
          page: page,
          size: size,
          sortBy: sortBy,
        },
      });

      return Promise.resolve(response);
    } catch (error) {
      console.log('Call API get all error', error);
      return Promise.reject(error);
    }
  }

  async getBookById(id) {
    try {
      const response = await axios.get(this.endpoints.bookUrl + `/${id}`);

      return Promise.resolve(response);
    } catch (error) {
      console.log('Call API get all error', error);
      return Promise.reject(error);
    }
  }

  async getBookByCategoryId(id, page, size) {
    try {
      const response = await axios.get(
        this.endpoints.bookUrl + `/category/${id}`,
        {
          params: {
            page: page,
            size: size,
          },
        },
      );

      return Promise.resolve(response);
    } catch (error) {
      console.log('Call API get all error', error);
      return Promise.reject(error);
    }
  }

  async addBook(data) {
    try {
      const response = await axios.post(this.endpoints.bookUrl, {
        params: {
          avatar: data.avatar,
          name: data.name,
          categories: data.categories,
          authors: data.authors,
          publishing_company: data.publishing_company,
          price: data.price,
          quantity: data.quantity,
        },
      });

      return Promise.resolve(response);
    } catch (error) {
      console.log('Call API get all error', error);
      return Promise.reject(error);
    }
  }

  async updateBook(id, data) {
    try {
      const response = await axios.post(this.endpoints.bookUrl + `/${id}`, {
        params: {
          avatar: data.avatar,
          name: data.name,
          categories: data.categories,
          authors: data.authors,
          publishing_company: data.publishing_company,
          price: data.price,
          quantity: data.quantity,
        },
      });

      return Promise.resolve(response);
    } catch (error) {
      console.log('Call API get all error', error);
      return Promise.reject(error);
    }
  }

  async deleteBook(id) {
    try {
      const response = await axios.delete(this.endpoints.bookUrl + `/${id}`);

      return Promise.resolve(response);
    } catch (error) {
      console.log('Call API get all error', error);
      return Promise.reject(error);
    }
  }
}

export default new BookAPIs();
