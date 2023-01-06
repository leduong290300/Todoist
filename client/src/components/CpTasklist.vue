<template lang="">
  <v-row no-gutters>
    <v-col cols="12" sm="12" class="px-4 pa-2 d-flex flex-wrap align-center">
      <CpTaskitems />
      <v-btn
        color="secondary"
        @click="isToogleDialog(true)"
        prepend-icon="mdi-plus"
        variant="flat"
      >
        Thêm mới
      </v-btn>
      <CpDialog :visible="isShow" @close="isToogleDialog(false)" />
    </v-col>
  </v-row>
</template>
<script>
import CpTaskitems from "./CpTaskitems.vue";
import CpDialog from "./CpDialog.vue";
import { mapState, mapActions } from "vuex";

export default {
  /**Components */
  components: {
    CpTaskitems,
    CpDialog,
  },

  /**Computed */
  computed: mapState({
    isShow: (state) => state.status.isShow,
  }),

  /**Method */
  methods: {
    ...mapActions("status", ["isToogleDialog"]),
  },
};
</script>
<style lang=""></style>
