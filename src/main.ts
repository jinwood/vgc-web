import firebase from "firebase";
import { createApp } from "vue";
import App from "./App.vue";
import { firebaseConfig } from "./firebase.config";
import router from "./router";

firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount("#app");
