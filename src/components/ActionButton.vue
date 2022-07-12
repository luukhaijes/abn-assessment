<template>
  <button class="button">
    <slot />
  </button>
</template>

<style>
.button {
  @apply rounded
  bg-button-red
  px-6
  py-1.5
  text-sm
  font-bold
  text-white
  shadow
  transition
  duration-200
  hover:bg-button-red-dark;
}
</style>
