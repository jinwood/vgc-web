import { createApp, App as Application } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { auth } from "./firebase";

let app: Application;

auth.onAuthStateChanged(() => {
  if (!app) {
    //@ts-ignore
    app = createApp(App)
      .use(store)
      .use(router)
      .mount("#app");
  }
});
