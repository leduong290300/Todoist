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
    ErrorMessage
  },
  data() {
    return {
      forms: { username: "", password: "", confirm_password: "" },
      errorNotif: []
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
    }
  }
};
</script>
<style lang="css">
.landing {
  position: relative;
  background: url("../../assets/landing.jpg") no-repeat center center/cover;
  height: 100vh;
}
.dark-overlay {
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
}
.landing-inner {
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
form {
  width: 30%;
}
.alert {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.alert-icon:hover {
  cursor: pointer;
}

h1,
h4,
p {
  color: white;
}
.tabs {
  width: 30%;
}
.nav-tabs {
  width: 100%;
  background: transparent;
}
.nav-item {
  width: 50%;
  padding: 10px;
  margin: 10px 0;
}
.nav-link {
  color: #fff;
  border-radius: 20px;
}
.nav-link:hover {
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.6);
}
.active {
  background: rgb(198, 246, 213);
  color: rgb(39, 103, 73);
}
</style>
