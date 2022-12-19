import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
import { mdi } from "vuetify/lib/iconsets/mdi";

//Datepicker
import Date_picker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    sets: {
      mdi,
    },
  },
});
const app = createApp(App);
app.component("Date_picker", Date_picker);
app.use(vuetify);
app.mount("#app");
