<template>
  <a
    href="!#"
    class="
      border border-secondary-pale-blue
      fill-current
      text-primary-blue
      hover:text-white hover:border-primary-blue hover:bg-primary-blue
      p-2
      rounded-full
      w-8
      h-8
      mx-1
      focus:outline-none focus:ring focus:border-secondary-pale-blue
    "
  >
    <slot />
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SocialContactAtom",
});
</script>

<style lang="scss"></style>
