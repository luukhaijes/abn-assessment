import { ref } from "vue";
import type { Ref } from "vue";

export interface UseGet<T> {
  data: Ref<T | null>;
  error?: Ref<ShowListError | null>;
  loading?: Ref<boolean>;
  reload?: (url: string) => void;
}

export interface ShowListError {
  message: string;
}

export function useGet<T>(url?: string): UseGet<T> {
  // https://github.com/vuejs/core/issues/2136
  const data = ref<T | null>(null) as Ref<T>;
  const error = ref<ShowListError | null>(null);
  const loading = ref<boolean>(true);

  const reload = (val: string) => {
    fetch(val)
      .then((res: Response) => res.json())
      .then((json: T) => {
        data.value = json;
        loading.value = false;
      })
      .catch((err: ShowListError) => {
        error.value = err;
        loading.value = false;
      });
  };

  if (url) {
    reload(url);
  }

  return {
    data,
    error,
    loading,
    reload
  };
}
