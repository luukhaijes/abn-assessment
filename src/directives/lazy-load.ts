import type { Directive, DirectiveBinding } from "vue";

function loadImage(el: HTMLImageElement | HTMLElement, providedSource: string) {
  el.addEventListener(
    "load",
    () => {
      setTimeout(() => el.classList.add("loaded"), 100);
    },
    { once: true }
  );

  el.addEventListener("error", () => {
    console.error("Image loading failed");
  });

  if (el instanceof HTMLImageElement) {
    el.src = providedSource;
  } else {
    el.style.backgroundImage = `url("${providedSource}")`;
  }
}

export default <Directive>{
  mounted(el, binding: DirectiveBinding<string>) {
    const source: string = binding.value;

    if (!source) {
      console.error("No source is provided by either directive input or 'data-source' attribute");
      return;
    }

    function callback(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          loadImage(el, source);
          observer.unobserve(el);
        }
      });
    }

    function setupObserver() {
      const options = {
        root: null,
        threshold: 0
      };
      const observer = new IntersectionObserver(callback, options);
      observer.observe(el);
    }

    if ("IntersectionObserver" in window) {
      setupObserver();
    } else {
      loadImage(el, source);
    }
  },
  unmounted(el) {
    document.body.removeEventListener("click", el.clickOutsideEvent);
  }
};
