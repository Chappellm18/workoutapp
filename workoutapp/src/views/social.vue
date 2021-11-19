<template>
  <div class="section">
    <div class="header">
      <section class="section is-small">
        <button class="button is-link is-medium" @click="open()">
          Create Post
        </button>
      </section>
      <div class="modal" v-bind:class="{ active: isActive }">
        <div class="modal-background"></div>
        <div class="modal-content">
          <!-- Any other Bulma elements you want -->
          <post-edit :new-post="newPost" @add="add()" />
          <post :post="newPost" />
        </div>
        <button
          class="modal-close is-large"
          @click="open()"
          aria-label="close"
        ></button>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <!-- Friends bar -->
      </div>
      <div class="column is-half">
        <!-- Post feed -->
        <div class="post" v-for="(p, i) in posts" :key="p.src">
          <post :post="p" @remove="remove(p, i)" />
        </div>
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
import Post from "../components/post.vue";
import session from "../services/session";
import { Add, Delete, GetFeed } from "../services/posts";
import PostEdit from "../components/post-edit.vue";
const newPost = () => ({
  user: session.user,
  user_handle: session.user.handle,
});
export default {
  components: {
    Post,
    PostEdit,
  },
  data() {
    return {
      posts: [],
      newPost: newPost(),
      isActive: false,
    };
  },
  async mounted() {
    this.posts = await GetFeed(session.user.handle);
  },
  methods: {
    async remove(post, i) {
      console.log({ post });
      const response = await Delete(post._id);
      if (response.deleted) {
        this.posts.splice(i, 1);
      }
    },
    async add() {
      console.log("Adding new post at " + new Date());
      const response = await Add(this.newPost);
      console.log({ response });
      if (response) {
        this.posts.unshift(response);
        this.newPost = newPost();
      }
    },
    open() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style>
</style>