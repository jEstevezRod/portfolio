import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'
import VueSweetalert2 from 'vue-sweetalert2';


// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);
Vue.use(Vuelidate);

import '@/assets/css/main.css'
import '@/assets/css/tailwind.css'

Vue.config.productionTip = false;
Vue.use(require('vue-moment'));

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
