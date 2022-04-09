<template>
  <b-alert v-model="hasErrors" variant="danger" v-show="isShowAleart">
    <span v-for="(error, index) in errorNotif" :key="index">{{ error }}</span>
    <b-icon-x
      font-scale="2"
      v-on:click="toggleAlert"
      class="alert-icon"
    ></b-icon-x>
  </b-alert>
</template>
<script>
export default {
  name: "ErrorMessage",
  props: { errorNotif: Array },
  data() {
    return {
      isShowAleart: true,
    };
  },
  computed: {
    hasErrors() {
      return this.errorNotif.length > 0;
    },
  },
  methods: {
    toggleAlert() {
      this.isShowAleart = !this.isShowAleart;
    },
  },
};
</script>
