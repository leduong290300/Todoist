<template>
  <v-card>
    <v-form ref="form" v-model="valid" @submit="handleRegisterAccount">
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="form.firstName"
              :rules="nameRules"
              :counter="10"
              label="Họ"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              v-model="form.lastName"
              :rules="nameRules"
              :counter="10"
              label="Tên"
              required
            ></v-text-field>
          </v-col>

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
              :rules="[passwordRules.required, passwordRules.typePassword]"
              label="Mật khẩu"
              :append-icon="showIcon ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showIcon ? 'text' : 'password'"
              counter
              @click:append="showIcon = !showIcon"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="12">
            <v-text-field
              v-model="form.password_confirmation"
              :rules="[passwordRules.required, passwordNotMatch]"
              :append-icon="showIcon ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showIcon ? 'text' : 'password'"
              counter
              @click:append="showIcon = !showIcon"
              label="Nhập lại mật khẩu"
              required
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            md="12"
            class="d-flex justify-space-between align-center"
          >
            <p>
              Đã có tài khoản ? <router-link to="/login">Đăng nhập</router-link>
            </p>
            <v-btn :disabled="!valid" color="success" type="submit"
              >Đăng ký</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>
<script>
import { mapMutations } from "vuex";
import { v4 as uuidv4 } from "uuid";
export default {
  data: () => ({
    valid: true,
    showIcon: false,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
    nameRules: [
      (v) => !!v || "Tên không được để trống",
      (v) => v.length <= 10 || "Tên phải ít hơn 10 ký tự",
    ],
    emailRules: [
      (v) => !!v || "E-mail không được để trống",
      (v) =>
        /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v
        ) || "E-mail không hợp lệ",
    ],
    passwordRules: {
      required: (v) => !!v || "Mật khẩu không được để trống",
      typePassword: (v) =>
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(v) ||
        "Mật khẩu phải chứa ít nhất một chữ thường, một số, một ký tự đặc biệt và một chữ hoa",
    },
  }),
  computed: {
    passwordNotMatch() {
      return () =>
        this.form.password === this.form.password_confirmation ||
        "Mật khẩu không khớp";
    },
  },
  methods: {
    ...mapMutations("auth", { IS_REGISTER_ACCOUNT: "IS_REGISTER_ACCOUNT" }),
    handleRegisterAccount(e) {
      e.preventDefault();
      this.IS_REGISTER_ACCOUNT({
        id: uuidv4(),
        firstName: this.form.firstName,
        lastName: this.form.lastName,
        email: this.form.email,
        password: this.form.password,
        avatarUrl:
          "https://gravatar.com/avatar/8449d4d080192e59fac40c2669252ba1?s=200&d=robohash&r=x",
      });
      this.$refs.form.reset();
      this.form.firstName = "";
      this.form.lastName = "";
      this.form.email = "";
      this.form.password = "";
      this.form.avatarUrl = "";
      this.form.password_confirmation = "";
    },
  },
};
</script>
<style></style>
