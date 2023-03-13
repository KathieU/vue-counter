// import { createApp } from "vue";
// import App from "./App.vue";
// import router from "./router";
// import { store } from "./store/index";

// createApp(App).use(router).use(store).mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");
