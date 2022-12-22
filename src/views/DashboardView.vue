<template>
  <v-container
    fluid
    class="container"
    :style="{ padding: layout.padding + 'px' }"
  >
    <v-app>
      <CpHeader />
      <CpMain />
      <CpFooter />
    </v-app>
  </v-container>
</template>
<script>
import CpHeader from "../components/CpHeader.vue";
import CpMain from "../components/CpMain.vue";
import CpFooter from "../components/CpFooter.vue";
export default {
  /*Import component */
  components: {
    CpHeader,
    CpMain,
    CpFooter,
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
