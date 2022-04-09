<script>
export default {
  name: "HomeView",
  created() {
    if (localStorage.getItem("data")) {
      this.$router.push({ name: "Login" });
    }
  },
};
</script>
