import axios from 'axios';
import BaseAPIs from './BaseAPIs';

class UserAPIs {
  endpoints = {
    userUrl: BaseAPIs.baseURL + '/users',
  };

  async getUserById(id) {
    try {
      const response = await axios.get(this.endpoints.userUrl + `/${id}`, {
        headers: BaseAPIs.headers,
      });

      return Promise.resolve(response);
    } catch (error) {
      console.log('Call API get all error', error);
      return Promise.reject(error);
    }
  }

  async getAllUser(page, size, sortBy) {
    try {
      const response = await axios.get(this.endpoints.userUrl, {
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

  async UpdateUser(id, data) {
    try {
      const response = await axios.put(this.endpoints.userUrl + `/${id}`, {
        username: data.username,
        password: data.password,
        name: data.name,
        dob: data.dob,
        gender: data.gender,
        phoneNumber: data.phoneNumber,
        email: data.email,
        address: data.address,
        avatar: data.avatar,
      });

      return Promise.resolve(response);
    } catch (error) {
      console.log('Call API get all error', error);
      return Promise.reject(error);
    }
  }

  async deleteUser(id) {
    try {
      const response = await axios.delete(
        this.endpoints.categoryUrl + `/${id}`,
      );

      return Promise.resolve(response);
    } catch (error) {
      console.log('Call API get all error', error);
      return Promise.reject(error);
    }
  }
}

export default new UserAPIs();
