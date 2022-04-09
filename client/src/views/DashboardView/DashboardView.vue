<template>
  <div id="dashboard">
    <NavbarMenu />
    <div class="card-dashboard" v-if="this.getAllTodos.length === 0">
      <CardDashboard />
    </div>
    <div class="post" v-else>
      <PostList v-if="this.getAllTodos" v-bind:todos="this.getAllTodos" />
      <b-button class="action-button" v-b-modal.modal-add>
        <img
          class="action-button__icons"
          src="../../assets/plus-circle-fill.svg"
          alt="add"
        />
      </b-button>
    </div>
    <AddModal />
  </div>
</template>

<script>
import NavbarMenu from "../../components/Nav/NavbarMenu";
import CardDashboard from "../../components/CardDashboard/CardDashboard";
import AddModal from "../../components/Modal/AddModal";
import PostList from "../../components/PostList/PostList";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "DashboardView",
  components: { NavbarMenu, CardDashboard, PostList, AddModal },

  created() {
    this.onReadPost();
  },
  data() {
    return {
      todos: null,
    };
  },
  computed: {
    ...mapGetters("Todo", ["getAllTodos"]),
  },
  methods: {
    ...mapActions("Todo", ["onReadPost"]),
  },
};
</script>

<style lang="scss" scoped>
@import "./DashboardView.scss";
</style>
