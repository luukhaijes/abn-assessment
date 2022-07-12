import { isRef, unref } from "vue";

const DEFAULT_PAGE_TITLE = "ABN Max";

export function usePageTitle(title?: string): { reset: () => void } {
  if (title) {
    if (isRef(title)) {
      title = unref<string>(title);
    }
    const titleChunks = [DEFAULT_PAGE_TITLE, title].filter(Boolean);

    document.title = titleChunks.join(" - ");
  }

  return {
    reset: () => document.title !== DEFAULT_PAGE_TITLE && (document.title = DEFAULT_PAGE_TITLE)
  };
}