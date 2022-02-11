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
      config: {
        classes: {
          outer: "block mb-4 mr-2 w-1/2",
          input:
            "form-input px-4 py-3 rounded shadow w-full border-gray-300 text-gray-700 leading-tight appearance-none focus:outline-none focus:border-transparent focus:ring-4 focus:ring-green-500 focus:ring-opacity-50",
          label: "text-gray-700",
          checkbox: "form-checkbox px-4 py-4 rounded",
        },
      },
    })
  )
  .mount("#app");
