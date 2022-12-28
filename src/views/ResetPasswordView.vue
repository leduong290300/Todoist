<template>
  <v-card>
    <v-form v-model="valid" lazy-validation>
      <v-container>
        <v-row>
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
              Đã có tài khoản ?
              <router-link to="/login">Đăng nhập</router-link>
            </p>
            <v-btn :disabled="!valid" color="success">Cập nhật mật khẩu</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    showIcon: false,
    form: {
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
};
</script>
<style></style>
