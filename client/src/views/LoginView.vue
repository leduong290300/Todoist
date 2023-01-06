<template>
  <v-card>
    <v-form ref="form" v-model="valid" @submit="handleLoginAccount">
      <v-container>
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field
              v-model="form.email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="12">
            <v-text-field
              v-model="form.password"
              :append-icon="showIcon ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="passwordRules"
              :type="showIcon ? 'text' : 'password'"
              counter
              @click:append="showIcon = !showIcon"
              label="Mật khẩu"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="12"
            class="d-flex justify-space-between align-center"
          >
            <p>
              Chưa có tài khoản ?
              <router-link to="/register">Đăng ký</router-link>
            </p>
            <p>
              <router-link to="/reset_password">Quên mật khẩu ?</router-link>
            </p>
          </v-col>
          <v-col
            ><v-btn :disabled="!valid" color="success" type="submit"
              >Đăng nhập</v-btn
            ></v-col
          >
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      valid: true,
      showIcon: false,
      emailRules: [
        (v) => !!v || "E-mail không được để trống",
        (v) =>
          /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            v
          ) || "E-mail không hợp lệ",
      ],
      passwordRules: [
        (v) => !!v || "Mật khẩu không được để trống",
        (v) =>
          /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(v) ||
          "Mật khẩu phải chứa ít nhất một chữ thường, một số, một ký tự đặc biệt và một chữ hoa",
      ],
    };
  },
  methods: {
    ...mapMutations("auth", { IS_LOGIN_ACCOUNT: "IS_LOGIN_ACCOUNT" }),
    handleLoginAccount(e) {
      e.preventDefault();
      this.IS_LOGIN_ACCOUNT({
        email: this.form.email,
        password: this.form.password,
      });
      this.$refs.form.reset();

      this.form.email = "";
      this.form.password = "";
    },
  },
};
</script>
<style>
.v-input--horizontal .v-input__append {
  position: absolute !important;
  right: 10px !important;
  margin-inline-start: 0px !important;
}
</style>
