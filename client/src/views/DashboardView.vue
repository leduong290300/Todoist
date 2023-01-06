<template>
  <v-app>
    <CpHeader />
    <CpMain />
    <CpFooter />
  </v-app>
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
};
</script>
<style></style>
