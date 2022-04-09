<template>
  <b-modal
    id="modal-update"
    title="Cập nhật"
    cancel-title="Hủy"
    ok-title="Cập nhật"
    centered
    @ok="handleUpdatePost"
  >
    <b-form>
      <b-form-group class="mb-3">
        <b-form-input
          type="text"
          name="title"
          placeholder="Tiêu đề"
          :value="todoById ? todoById.title : ''"
          v-model="forms.title"
        ></b-form-input>
      </b-form-group>
      <b-form-group class="mb-3">
        <b-form-textarea
          type="text"
          name="description"
          placeholder="Mô tả"
          rows="3"
          :value="todoById ? todoById.description : ''"
          v-model="forms.description"
        ></b-form-textarea>
      </b-form-group>
      <b-form-group class="mb-3">
        <b-form-input
          type="text"
          name="url"
          placeholder="https://example.com"
          :value="todoById ? todoById.url : ''"
          v-model="forms.url"
        ></b-form-input>
      </b-form-group>
      <b-form-group class="mb-3">
        <b-row>
          <b-col>
            <span>Trạng thái: {{ todoById ? todoById.status : "" }}</span>
          </b-col>
          <b-col>
            <b-form-select v-model="forms.status">
              <b-form-select-option
                v-for="(status, key) in this.options"
                :key="key"
                :value="status.value"
                >{{ status.text }}</b-form-select-option
              >
            </b-form-select>
          </b-col>
        </b-row>
      </b-form-group>
    </b-form>
  </b-modal>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "UpdateModal",
  props: { todoById: Object },
  data() {
    return {
      options: [
        { value: null, text: "Bạn đã ?" },
        { value: "Bắt đầu học", text: "Bắt đầu học" },
        { value: "Đang học", text: "Đang học" },
        { value: "Đã học xong", text: "Đã học xong" },
      ],
      forms: { title: "", description: "", url: "", status: null },
    };
  },
  computed: {
    isStatus() {
      return this.todoById ? this.todoById.status : "";
    },
  },

  methods: {
    ...mapActions("Todo", ["onUpdatePost"]),

    handleUpdatePost() {
      const { title, description, url, status } = this.forms;
      const { _id } = this.todoById;
      this.onUpdatePost({ _id, title, description, url, status });
    },
  },
};
</script>
