import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/styles/tailwind.css';
import './assets/styles/main.css';
import './assets/styles/admin.css';
import store from './store';
import moment from 'moment';

import '@fortawesome/fontawesome-free/css/all.css';

const app = createApp(App);

app.config.globalProperties.$filters = {
  formatDate(value) {
    if (value) {
      return moment(String(value)).format('MM/DD/YYYY hh:mm');
    }
  },
  toCurrency(value) {
    if (typeof value !== 'number') {
      return value;
    }

    let formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0,
    });
    return formatter.format(value);
  },
};

app.use(store).use(router).mount('#app');
