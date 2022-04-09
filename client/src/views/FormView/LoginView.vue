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
    ErrorMessage
  },
  data() {
    return {
      forms: { username: "", password: "" },
      errorNotif: []
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
