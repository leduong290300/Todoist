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
import router from "./router";
export default {
  /*Create data */
  data() {
    return {
      layout: {
        padding: 0,
      },
    };
  },

  components: {
    RouterView,
  },

  //*Hooks
  created() {
    router.push("/login");
  },
};
</script>
<style></style>
