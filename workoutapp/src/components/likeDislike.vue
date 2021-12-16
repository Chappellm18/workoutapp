<template>
  <div class="card">
    <div class="like">
      {{ post.likes }}
      <button class="button is-outlined" @click.prevent="like()">
        <figure class="image is-24x24">
          <img src="../assets/up.png" />
        </figure>
      </button>
    </div>
    <div class="dislike">
      <button class="button is-outlined" @click.prevent="dislike()">
        <figure class="image is-24x24">
          <img src="../assets/down.png" />
        </figure>
      </button>
      {{ post.dislikes }}
    </div>
  </div>
</template>

<script>
import { react } from "../services/posts.js";
export default {
  props: {
    post: Object,
  },
  methods: {
    like() {
      react(this.post.id, "like");
    },
    dislike() {
      react(this.post.id, "dislike");
    },
  },
};
</script>

<style>
</style>