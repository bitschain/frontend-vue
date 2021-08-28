import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "primevue/resources/themes/bootstrap4-light-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import PrimeVue from "primevue/config";

import FileUpload from "primevue/fileupload";

createApp(App)
    .use(router)
    .use(PrimeVue)
    .component("FileUpload", FileUpload)
    .mount('#app')
