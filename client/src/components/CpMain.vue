<template>
  <v-main>
    <CpTasklist v-if="allTasks < 0" />
    <CpWaiting v-else />
  </v-main>
</template>
<script>
import CpWaiting from "./CpWaiting.vue";
import CpTasklist from "./CpTasklist.vue";
import { mapGetters } from "vuex";

export default {
  /**Components */
  components: {
    CpWaiting,
    CpTasklist,
  },

  /**Computed */
  computed: {
    ...mapGetters("tasks", {
      allTasks: "getAllTasks",
    }),
  },
};
</script>
<style></style>
