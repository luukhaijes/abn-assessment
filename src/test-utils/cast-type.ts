// https://github.com/vuejs/test-utils/issues/1191#issuecomment-1002664702
export function castType<T>(vm: unknown): T {
  return vm as T;
}
