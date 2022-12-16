<template>
  <v-app-bar class="bg-teal d-flex w-100 align-center px-4">
    <v-row no-gutters>
      <v-col cols="12" sm="12" class="d-flex align-center">
        <v-col cols="3" sm="3">
          <v-img
            v-bind:src="image.logo"
            cover
            v-bind:width="size.width"
          ></v-img>
        </v-col>
        <v-col cols="5" sm="5">
          <v-text-field
            label="Tìm kiếm"
            variant="underlined"
            class="mt-5"
          ></v-text-field>
        </v-col>
        <v-col cols="4" sm="4" class="d-flex align-center">
          <v-row gutters>
            <v-col cols="2" sm="2">
              <v-menu transition="slide-x-transition">
                <template v-slot:activator="{ props }">
                  <span v-bind="props"> Xắp xếp </span>
                </template>

                <v-list>
                  <v-list-item v-for="(item, i) in items" :key="i">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-col>
            <v-col cols="2" sm="2">
              <v-menu transition="slide-x-transition">
                <template v-slot:activator="{ props }">
                  <span v-bind="props"> Xắp xếp </span>
                </template>

                <v-list>
                  <v-list-item v-for="(item, i) in items" :key="i">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-col>
          </v-row>
        </v-col>
      </v-col>
    </v-row>
  </v-app-bar>
</template>
<script>
import logo from "../assets/logo/CHS_Tasks logo.png";
export default {
  data() {
    return {
      size: {
        width: 140,
      },
      image: {
        logo: logo,
      },
      items: [{ title: "Từ A - Z" }, { title: "Từ Z - A" }],
    };
  },
};
</script>
<style></style>
