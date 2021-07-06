<template>
  <ComingSoonPage class="container font-libre" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ComingSoonPage from "./components/pages/ComingSoonPage.vue";

export default defineComponent({
  name: "App",
  components: {
    ComingSoonPage,
  },
});
</script>

<style lang="scss">
@use './assets/tailwind.css';

html,
body,
#app {
  height: 100%;
  min-height: 100vh;
}
</style>
