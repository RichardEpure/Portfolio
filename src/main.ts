import { createApp } from "vue";
import "./scss/styles.scss";
import App from "./App.vue";

import { library as font_awesome_library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faGraduationCap,
  faIndustry,
  faFileCode,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

font_awesome_library.add(
  faGithub,
  faLinkedin,
  faStackOverflow,
  faGraduationCap,
  faIndustry,
  faFileCode
);

createApp(App).component("FontAwesomeIcon", FontAwesomeIcon).mount("#app");
