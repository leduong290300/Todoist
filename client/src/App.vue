<template>
  <div id="app">
    <nav>
      <router-link to="/" />
      <router-link to="/dashboard" />
    </nav>
    <router-view />
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "App",
  beforeMount() {
    this.onHandleVerifyUser();
  },
  methods: {
    ...mapActions("Auth", ["onHandleVerifyUser"]),
  },
};
</script>
