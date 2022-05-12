import App from "./App.vue";

Vue.config.devtools = true;
Vue.config.productionTip = false;

new Vue({
  el: "#root",
  template: `<App></App>`,
  components: {
    App,
  },
});
