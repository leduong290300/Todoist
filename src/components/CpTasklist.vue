<template lang="">
  <v-row no-gutters>
    <v-col cols="12" sm="12" class="px-4 pa-2 d-flex flex-wrap">
      <CpTaskitems />
      <CpTaskitems />
      <CpTaskitems />
      <CpTaskitems />
    </v-col>
  </v-row>
</template>
<script>
import CpTaskitems from "./CpTaskitems.vue";
export default {
  /**Components */
  components: {
    CpTaskitems,
  },
};
</script>
<style lang=""></style>
