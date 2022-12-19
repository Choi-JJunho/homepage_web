import {createApp} from 'vue'
import App from './App.vue'
import router from "@/router";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

createApp(App).use(router, axios).mount('#app')