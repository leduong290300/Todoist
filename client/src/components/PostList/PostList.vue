<template>
  <b-container>
    <b-row class="g-4 mx-auto mt-3">
      <b-col
        class="my-2"
        col
        lg="4"
        v-for="(todo, index) in todos"
        :key="index"
      >
        <b-card
          :title="todo.title"
          class="cards"
          :class="[
            todo.status === 'Đã học xong'
              ? cardsSuccess
              : todo.status === 'Đang học'
              ? cardsWarning
              : cardsDanger
          ]"
        >
          <b-row>
            <b-col>
              <span
                class="badger"
                :class="[
                  todo.status === 'Đã học xong'
                    ? badgerSuccess
                    : todo.status === 'Đang học'
                    ? badgerWarning
                    : badgerDanger
                ]"
                >{{ todo.status }}</span
              >
            </b-col>
          </b-row>
          <b-card-text>
            {{ todo.description }}
          </b-card-text>

          <b-row>
            <b-col>
              <b-button class="action-button" :href="todo.url" target="_blank">
                <img
                  class="action-button__icons"
                  src="../../assets/play-btn.svg"
                  alt="Play"
                />
              </b-button>
              <b-button
                class="action-button"
                v-b-modal.modal-update
                v-on:click="onFindId(todo._id)"
              >
                <img
                  class="action-button__icons"
                  src="../../assets/pencil.svg"
                  alt="Edit"
                />
              </b-button>
              <b-button
                class="action-button"
                v-on:click="handleDeletePost(todo._id)"
              >
                <img
                  class="action-button__icons"
                  src="../../assets/trash.svg"
                  alt="Edit"
                />
              </b-button>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <UpdateModal v-bind:todoById="this.getTodoById" />
  </b-container>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import UpdateModal from "../Modal/UpdateModal";
export default {
  name: "PostList",
  props: { todos: Array },
  components: { UpdateModal },
  data() {
    return {
      badgerSuccess: "badger-success",
      badgerWarning: "badger-warning",
      badgerDanger: "badger-danger",
      cardsSuccess: "cards-success",
      cardsWarning: "cards-warning",
      cardsDanger: "cards-danger"
    };
  },
  computed: {
    ...mapGetters("Todo", ["getTodoById"])
  },
  methods: {
    ...mapActions("Todo", ["onDeletePost", "onFindIdPost"]),

    handleDeletePost(postId) {
      this.onDeletePost(postId);
    },

    onFindId(postId) {
      this.onFindIdPost(postId);
    }
  }
};
</script>
<style lang="css">
.badger {
  display: inline-block;
  padding: 0.35em 0.65em;
  font-size: 0.75em;
  font-weight: 700;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
}
.badger-success {
  background: #28a745;
}
.badger-danger {
  background: #dc3545;
}
.badger-warning {
  background: #ffc107;
}

.cards {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}
.cards-success {
  border: 1px solid #28a745;
}
.cards-danger {
  border: 1px solid #dc3545;
}
.cards-warning {
  border: 1px solid #ffc107;
}
.action-button {
  padding-top: 0;
  background: transparent;
  border: none;
}
.action-button:hover {
  background: transparent;
}
.action-button__icons {
  width: 24px;
  height: 24px;
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
