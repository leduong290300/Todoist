<template>
  <div class="card-main">
    <b-card title="Chào mừng đến với Todoist" class="mx-5 my-5 text-center">
      <b-card-text>Click vào nút bên dưới để thêm kỹ năng cần học</b-card-text>
      <b-button variant="primary" v-b-modal.modal-add>Thêm</b-button>
    </b-card>
  </div>
</template>
<script>
export default {
  name: "CardDashboard",
};
</script>
