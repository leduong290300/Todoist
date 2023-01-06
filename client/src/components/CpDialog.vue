<template>
  <v-row>
    <v-dialog v-model="show" persistent class="custom_dialog">
      <v-card>
        <v-card-title>
          <span class="text-h5">Thêm công việc</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Tên công việc" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea label="Nội dung công việc"></v-textarea>
              </v-col>
              <v-col cols="12">
                <Date_picker v-model="date" range week-picker />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click.stop="show = false"
          >
            Hủy
          </v-btn>
          <v-btn color="blue-darken-1" variant="text"> Lưu </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const date = ref();
    return {
      date,
    };
  },
  /**Props */
  props: ["visible"],
  computed: {
    show: {
      get() {
        return this.visible;
      },
      set(value) {
        if (!value) {
          this.$emit("close");
        }
      },
    },
  },
};
</script>
<style>
.custom_dialog {
  max-width: calc(100% - 500px);
}
</style>
