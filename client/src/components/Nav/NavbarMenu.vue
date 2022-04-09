<template>
  <b-container fluid>
    <b-row>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-col col lg="6" class="navbar-left">
          <b-navbar-brand>
            <img src="../../assets/logo.svg" alt="todoist" class="logo" />
            Todoist
          </b-navbar-brand>
          <b-nav class="navbar-link__list">
            <b-nav-item class="navbar-link__items">
              <router-link to="/dashboard">Trung tâm điều khiển</router-link>
            </b-nav-item>
          </b-nav>
        </b-col>

        <b-col col lg="6" class="navbar-right">
          <b-nav class="navbar-list">
            <b-nav-item class="navbar-items"
              >Xin chào {{ this.getUsername }}</b-nav-item
            >
            <b-button variant="secondary" v-on:click="handleLogoutUser">
              <img
                src="../../assets/logout.svg"
                alt="logout"
                class="navbar-icon"
              />
              Đăng xuất</b-button
            >
          </b-nav>
        </b-col>
      </b-navbar>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "NavbarMenu",
  computed: {
    ...mapGetters("Auth", ["getUsername"]),
  },

  methods: {
    ...mapActions("Auth", ["onHandleLogout"]),

    handleLogoutUser() {
      this.onHandleLogout();
    },
  },
};
</script>

<style lang="scss">
@import "./NavbarMenu.scss";
</style>
