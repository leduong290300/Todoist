<template>
  <div class="landing">
    <div class="dark-overlay">
      <div class="landing-inner">
        <h1>Todoist</h1>
        <b-form class="mt-3">
          <ErrorMessage v-if="errorNotif" v-bind:errorNotif="errorNotif" />
          <b-form-group class="mb-3">
            <b-form-input
              type="text"
              name="username"
              placeholder="Tên đăng nhập"
              v-model="forms.username"
            ></b-form-input>
          </b-form-group>

          <b-form-group class="mb-3">
            <b-form-input
              type="password"
              name="password"
              placeholder="Mật khẩu"
              v-model.trim="forms.password"
            ></b-form-input>
          </b-form-group>

          <b-button variant="primary" class="mb-3" v-on:click="handleOnlogin"
            >Đăng nhập</b-button
          >
        </b-form>
        <p class="mt-3">
          Chưa có tài khoản ?
          <router-link to="/register">
            <b-button variant="info">Đăng ký</b-button>
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import ErrorMessage from "../../components/Alert/ErrorMessage";
import { mapActions } from "vuex";
export default {
  name: "LoginView",
  components: {
    ErrorMessage,
  },
  data() {
    return {
      forms: { username: "", password: "" },
      errorNotif: [],
    };
  },
  methods: {
    ...mapActions("Auth", ["onHandleLogin"]),

    isEmpty() {
      if (this.forms.username.length == 0 || this.forms.password.length == 0) {
        return true;
      }
      return false;
    },

    isLenghtPassword() {
      if (this.forms.password.length < 6) {
        return false;
      }
      return true;
    },

    isFormValid() {
      if (this.isEmpty()) {
        this.errorNotif.push("Vui lòng điền tất cả các trường");
        return false;
      }
      if (!this.isLenghtPassword()) {
        this.errorNotif.push("Mật khẩu không được ít hơn 6 kí tự");
        return false;
      }
      return true;
    },

    handleOnlogin() {
      if (this.isFormValid()) {
        const { username, password } = this.forms;
        this.onHandleLogin({ username, password });
        this.errorNotif = [];
      }
    },
  },
};
</script>
<style lang="scss">
@import "./FormView.scss";
</style>
