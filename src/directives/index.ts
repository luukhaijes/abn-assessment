import type { App } from "vue";
import lazyImage from "./lazy-load";

export function registerDirectives(app: App) {
  app.directive("lazy-image", lazyImage);
}
