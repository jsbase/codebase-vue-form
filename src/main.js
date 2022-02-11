import { createApp } from "vue";
import { plugin, defaultConfig } from "@formkit/vue";
import { de, en } from "@formkit/i18n";
import "@formkit/themes/genesis/theme";
import "./assets/styles/main.scss";
import App from "./App.vue";
import "./index.css";

createApp(App)
  .use(
    plugin,
    defaultConfig({
      locales: { de, en },
      locale: "en",
    })
  )
  .mount("#app");
