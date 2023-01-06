<template>
  <v-col cols="4" sm="4">
    <v-card
      title="NodeJS"
      subtitle="Từ 16/12/2022 đến 17/12/2022"
      text="ExpressJS"
      variant="tonal"
    >
      <span class="ml-4">Trạng thái : Đang thực hiện</span>
      <v-card-actions>
        <v-btn prepend-icon="mdi-web" variant="flat" color="secondary">
          Truy cập
        </v-btn>
        <v-btn
          prepend-icon="mdi-pencil"
          variant="flat"
          color="warning"
          @click="dialog = true"
        >
          Cập nhật
        </v-btn>
        <v-btn prepend-icon="mdi-delete" variant="flat" color="error">
          Xóa
        </v-btn>
      </v-card-actions>
    </v-card>
    <CpDialog :visible="showDialog" @close="onCloseDialog" />
  </v-col>
</template>
<script>
import CpDialog from "./CpDialog.vue";
export default {
  /**Components */
  components: {
    CpDialog,
  },

  /**Computed */
  computed: {},

  /**Method */
  methods: {},
};
</script>
<style></style>
