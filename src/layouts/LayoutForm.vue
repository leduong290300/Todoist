<template lang="">
  <v-app class="wrapper">
    <v-container>
      <v-row>
        <v-col cols="8" sm="8" class="custom">
          <v-img
            v-bind:src="image.logo"
            cover
            v-bind:width="size.width"
            class="custom cs_image"
          ></v-img>
          <RouterView />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
import logo from "../assets/logo/CHS_Tasks logo.png";
import { RouterView } from "vue-router";
export default {
  data() {
    return {
      size: {
        width: 140,
      },
      image: {
        logo: logo,
      },
    };
  },
  components: {
    RouterView,
  },
};
</script>
<style>
.wrapper {
  background: rgb(2, 0, 36);
  background: radial-gradient(
    circle,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 81, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
}
.custom {
  left: 50%;
  transform: translateX(-50%);
}
.custom .cs_image {
  margin-bottom: 10px;
}
</style>
