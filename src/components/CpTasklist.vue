<template lang="">
  <v-row no-gutters>
    <v-col cols="12" sm="12" class="px-4 pa-2 d-flex flex-wrap align-center">
      <CpTaskitems />
      <v-btn
        color="secondary"
        @click="dialog = true"
        prepend-icon="mdi-plus"
        variant="flat"
      >
        Thêm mới
      </v-btn>
      <CpDialog :visible="dialog" @close="dialog = false" />
    </v-col>
  </v-row>
</template>
<script>
import CpTaskitems from "./CpTaskitems.vue";
import CpDialog from "./CpDialog.vue";
export default {
  /*Create data */
  data() {
    return {
      dialog: false,
    };
  },

  /**Components */
  components: {
    CpTaskitems,
    CpDialog,
  },
};
</script>
<style lang=""></style>
