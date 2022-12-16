<template>
  <div class="footer">
    <v-row no-gutters>
      <v-col cols="12" sm="12">
        <v-footer
          class="d-flex flex-column"
          :style="{ padding: layout.padding + 'px' }"
        >
          <div class="bg-teal d-flex w-100 align-center px-4">
            <strong>Liên hệ với tôi qua các mạng xã hội!</strong>

            <v-spacer></v-spacer>

            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4"
              :icon="icon"
              variant="plain"
              size="small"
            ></v-btn>
          </div>

          <div class="px-4 py-2 bg-black text-center w-100">
            Copyright {{ new Date().getFullYear() }} by
            <strong>Le Duong</strong>. All Rights Reserved.
          </div>
        </v-footer>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  /*Create data*/
  data() {
    return {
      layout: {
        padding: 0,
      },
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    };
  },
};
</script>
<style></style>
