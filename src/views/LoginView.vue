<template>
  <v-card>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="12">
            <v-text-field
              v-model="email"
              :rules="emailRules"
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
          <v-col><v-btn color="secondary">Đăng nhập</v-btn></v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      valid: false,
      firstname: "",
      lastname: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => v.length <= 10 || "Name must be less than 10 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
    };
  },
};
</script>
<style></style>
