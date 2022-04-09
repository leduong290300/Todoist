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
      todos: null
    };
  },
  computed: {
    ...mapGetters("Todo", ["getAllTodos"])
  },
  methods: {
    ...mapActions("Todo", ["onReadPost"])
  }
};
</script>

<style lang="css" scoped>
.action-button {
  padding-top: 0;
  background: transparent;
  border: none;
  position: fixed;
  right: 3rem;
  bottom: 3rem;
  background: transparent;
  border: none;
}
.action-button:hover {
  background: transparent;
}
.action-button__icons {
  width: 60px;
  height: 60px;
}
button.action-button.btn:focus,
button.action-button.btn:active {
  outline: none;
  background: transparent;
  border: none;
  box-shadow: none;
}
a.action-button.btn:focus,
a.action-button.btn:active {
  outline: none;
  background: transparent;
  border: none;
  box-shadow: none;
}
</style>
