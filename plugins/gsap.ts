import { gsap } from "gsap";
import { Plugin } from "@nuxt/types";

declare module "vue/types/vue" {
  interface Vue {
    $gsap: typeof gsap;
  }
}

const gsapPlugin: Plugin = ({ app }, inject) => {
  inject("gsap", gsap);
};

export default gsapPlugin;
