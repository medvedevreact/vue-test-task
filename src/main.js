import Vue from "vue";
import App from "./App.vue";
import "./styles/index.scss";
import router from "./router/index";
import vuetify from "../vuetify";

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
