<template>
  <v-container
    fluid
    class="container"
    :style="{ padding: layout.padding + 'px' }"
  >
    <RouterView />
  </v-container>
</template>
<script>
import { RouterView } from "vue-router";
export default {
  /*Import component */
  components: {
    RouterView,
  },
  /*Create data */
  data() {
    return {
      layout: {
        padding: 0,
      },
    };
  },
};
</script>
<style></style>
