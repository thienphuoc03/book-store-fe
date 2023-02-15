import axios from 'axios';
import BaseAPIs from './BaseAPIs';

class OrderAPIs {
  endpoints = {
    orderUrl: BaseAPIs.baseURL + '/orders',
  };

  async getAllOrder(page, size) {
    try {
      const response = await axios.get(this.endpoints.orderUrl, {
        params: {
          page: page,
          size: size,
        },
      });

      return Promise.resolve(response);
    } catch (error) {
      console.log('Call API get all error', error);
      return Promise.reject(error);
    }
  }

  async getOrderById(id) {
    try {
      const response = await axios.get(this.endpoints.orderUrl + `/${id}`);

      return Promise.resolve(response);
    } catch (error) {
      console.log('Call API get all error', error);
      return Promise.reject(error);
    }
  }

  async addOrder(order) {
    try {
      const response = await axios.post(this.endpoints.orderUrl, {
        name: order.name,
        deliveryAddress: order.deliveryAddress,
        phoneNumber: order.phoneNumber,
        total: order.total,
        userId: order.userId,
      });

      return Promise.resolve(response);
    } catch (error) {
      console.log('Call API get all error', error);
      return Promise.reject(error);
    }
  }

  async updateOrder(id, order) {
    try {
      const response = await axios.put(this.endpoints.orderUrl`/${id}`, {
        name: order.name,
        deliveryAddress: order.deliveryAddress,
        phoneNumber: order.phoneNumber,
        deliveryAt: order.deliveryAt,
        total: order.total,
        userId: order.userId,
        orderState: order.orderState,
      });

      return Promise.resolve(response);
    } catch (error) {
      console.log('Call API get all error', error);
      return Promise.reject(error);
    }
  }

  async deleteOrder(id) {
    try {
      const response = await axios.delete(this.endpoints.orderUrl`/${id}`);

      return Promise.resolve(response);
    } catch (error) {
      console.log('Call API get all error', error);
      return Promise.reject(error);
    }
  }
}

export default new OrderAPIs();
