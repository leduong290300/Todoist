<template>
  <v-row no-gutters>
    <v-col cols="12" sm="12" class="px-4 pa-2 mt-4 text-center">
      <v-card
        title="Xin chào ...."
        text="Nơi lưu trữ, quản lí những công việc cần làm"
        variant="tonal"
      >
        <v-card-actions class="justify-center">
          <v-btn
            prepend-icon="mdi-plus"
            variant="flat"
            color="secondary"
            @click="isToogleDialog(true)"
          >
            Thêm mới
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
  <CpDialog :visible="isShow" @close="isToogleDialog(false)" />
</template>
<script>
import CpDialog from "./CpDialog.vue";
import { mapState, mapActions } from "vuex";

export default {
  /**Components */
  components: {
    CpDialog,
  },
  /**Computed */
  computed: mapState({
    isShow: (state) => state.status.isShow,
  }),

  /**Methods */
  methods: {
    ...mapActions("status", ["isToogleDialog"]),
  },
};
</script>
<style></style>
