<template>
  <b-modal
    id="modal-add"
    title="Bạn muốn học?"
    cancel-title="Hủy"
    ok-title="Thêm"
    centered
    @ok="createPost"
  >
    <b-form>
      <b-form-group class="mb-3">
        <b-form-input
          type="text"
          name="title"
          placeholder="Tiêu đề"
          v-model="forms.title"
        ></b-form-input>
      </b-form-group>
      <b-form-group class="mb-3">
        <b-form-textarea
          type="text"
          name="description"
          placeholder="Mô tả"
          rows="3"
          v-model="forms.description"
        ></b-form-textarea>
      </b-form-group>
      <b-form-group class="mb-3">
        <b-form-input
          type="text"
          name="url"
          placeholder="https://example.com"
          v-model="forms.url"
        ></b-form-input>
      </b-form-group>
    </b-form>
  </b-modal>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "AddModal",
  data() {
    return {
      forms: { title: "", description: "", url: "", status: "Bắt đầu học" },
    };
  },
  methods: {
    ...mapActions("Todo", ["onCreatePost"]),

    createPost() {
      const { title, description, url, status } = this.forms;
      this.onCreatePost({ title, description, url, status });
    },
  },
};
</script>
