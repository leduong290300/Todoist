<template>
  <v-container
    fluid
    class="container"
    :style="{ padding: layout.padding + 'px' }"
  >
    <CpDashboard />
  </v-container>
</template>
<script>
import CpDashboard from "./views/CpDashboard.vue";
export default {
  /*Create data */
  data() {
    return {
      layout: {
        padding: 0,
      },
    };
  },
  /*Import component */
  components: {
    CpDashboard,
  },
};
</script>
<style></style>
