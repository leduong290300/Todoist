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
        <v-col cols="4" sm="4" class="d-flex align-center justify-end">
          <v-menu>
            <template v-slot:activator="{ props }">
              <span variant="text" v-bind="props">Lọc / Sắp xếp</span>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in filter"
                :key="index"
                :value="index"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list>
              <v-list-item
                v-for="(item, index) in status"
                :key="index"
                :value="index"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-btn
            variant="text"
            icon="mdi-dots-vertical"
            @click.stop="drawer = !drawer"
          ></v-btn>
        </v-col>
      </v-col>
    </v-row>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" temporary>
    <v-list-item
      prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
      title="John Leider"
    ></v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-card-account-details-outline"
        title="Hồ sơ cá nhân"
        value="home"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-logout"
        title="Đăng xuất"
        value="logout"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
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
      filter: [
        {
          title: " Thứ tự : Từ A - Z",
        },
        {
          title: "Thứ tự : Từ Z - A",
        },
      ],
      status: [
        {
          title: " Trạng thái : Tất cả",
        },
        {
          title: "Trạng thái : Đang thực hiện",
        },
        {
          title: "Trạng thái : Đã hoàn thành",
        },
      ],
      drawer: null,
    };
  },
};
</script>
<style></style>
