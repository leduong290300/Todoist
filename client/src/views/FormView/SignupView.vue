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
              placeholder="Tên đăng nhập"
              name="username"
              v-model="forms.username"
            ></b-form-input>
          </b-form-group>

          <b-form-group class="mb-3">
            <b-form-input
              placeholder="Mật khẩu"
              type="password"
              name="password"
              v-model.trim="forms.password"
            ></b-form-input>
          </b-form-group>

          <b-form-group class="mb-3">
            <b-form-input
              placeholder="Nhập lại mật khẩu"
              type="password"
              name="confirm_password"
              v-model.trim="forms.confirm_password"
            ></b-form-input>
          </b-form-group>

          <b-button variant="primary" class="mb-3" v-on:click="handleOnRegister"
            >Đăng ký</b-button
          >
        </b-form>
        <p class="mt-3">
          Đã có tài khoản ?
          <router-link to="/login">
            <b-button variant="info">Đăng nhập</b-button>
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
  name: "SignupView",
  components: {
    ErrorMessage,
  },
  data() {
    return {
      forms: { username: "", password: "", confirm_password: "" },
      errorNotif: [],
    };
  },
  methods: {
    ...mapActions("Auth", ["onHandleRegister"]),

    isEmpty() {
      if (
        this.forms.username.length == 0 ||
        this.forms.password.length == 0 ||
        this.forms.confirm_password == 0
      ) {
        return true;
      }
      return false;
    },

    isLenghtPassword() {
      if (
        this.forms.password.length < 6 ||
        this.forms.confirm_password.length < 6
      ) {
        return false;
      }
      return true;
    },

    isMatchPassword() {
      if (this.forms.confirm_password !== this.forms.password) {
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
      if (!this.isMatchPassword()) {
        this.errorNotif.push("Mật khẩu nhập lại không khớp");
        return false;
      }

      return true;
    },

    handleOnRegister() {
      if (this.isFormValid()) {
        const { username, password } = this.forms;
        this.onHandleRegister({ username, password });
        this.errorNotif = [];
      }
    },
  },
};
</script>
<style lang="scss">
@import "./FormView.scss";
</style>
