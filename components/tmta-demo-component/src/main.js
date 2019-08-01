import tmtaCore, { Vue, core } from "tmta-core";
import App from "./App.vue";

Vue.config.productionTip = false;

window.tmtaCore = tmtaCore;

core.init({ initWidgets: true }).then(() => {
  new Vue({
    render: h => h(App)
  }).$mount("#app");
});
