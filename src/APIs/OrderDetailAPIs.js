import axios from 'axios';
import BaseAPIs from './BaseAPIs';

class OrderDetailAPIs {
  endpoints = {
    orderDetailUrl: BaseAPIs.baseURL + '/order-details',
  };

  async getAllOrderDetail(page, size) {
    try {
      const response = await axios.get(this.endpoints.orderDetailUrl, {
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

  async getOrderDetailById(id) {
    try {
      const response = await axios.get(
        this.endpoints.orderDetailUrl + `/${id}`,
      );

      return Promise.resolve(response);
    } catch (error) {
      console.log('Call API get all error', error);
      return Promise.reject(error);
    }
  }

  async addOrderDetail(order) {
    try {
      const response = await axios.post(this.endpoints.orderDetailUrl, {
        orderId: order.orderId,
        bookId: order.bookId,
        quantity: order.quantity,
        totalAmount: order.totalAmount,
      });

      return Promise.resolve(response);
    } catch (error) {
      console.log('Call API get all error', error);
      return Promise.reject(error);
    }
  }

  async updateOrderDetail(id, order) {
    try {
      const response = await axios.put(this.endpoints.orderDetailUrl`/${id}`, {
        orderId: order.orderId,
        bookId: order.bookId,
        quantity: order.quantity,
        totalAmount: order.totalAmount,
      });

      return Promise.resolve(response);
    } catch (error) {
      console.log('Call API get all error', error);
      return Promise.reject(error);
    }
  }

  async deleteOrder(id) {
    try {
      const response = await axios.delete(
        this.endpoints.orderDetailUrl`/${id}`,
      );

      return Promise.resolve(response);
    } catch (error) {
      console.log('Call API get all error', error);
      return Promise.reject(error);
    }
  }
}

export default new OrderDetailAPIs();
