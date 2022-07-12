<template>
  <div class="relative">
    <IconSearch class="absolute left-1 top-1/2 z-10 mt-[-16px] w-8 -scale-x-100" fill="#b7b9c3" />
    <input
      data-test="search-input"
      type="search"
      class="w-full rounded-md p-3 pl-12 text-2xl focus:outline-none"
      placeholder="Search..."
      @input="handleInput($event)"
      ref="input"
    />
  </div>
</template>

<script setup lang="ts">
import IconSearch from "@/components/icons/IconSearch.vue";
import { onMounted, ref } from "vue";

defineProps<{ modelValue?: string }>();
const emits = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const input = ref<HTMLInputElement | null>(null);

const handleInput = (event: Event) => {
  if (event.target) {
    emits("update:modelValue", (event.target as HTMLInputElement).value);
  }
};

onMounted(() => {
  input.value?.focus();
});
</script>