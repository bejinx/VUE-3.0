import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import elementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import '@/assets/css/index.scss'
//引入外部矢量图
// import '@/assets/iconfont/iconfont.css'



createApp(App).use(store).use(router).use(elementPlus).mount("#app");
