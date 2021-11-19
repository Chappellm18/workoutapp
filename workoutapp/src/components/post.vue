<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="post.src" :alt="post.alt" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="post.src" alt="Placeholder image" />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">
            {{ post.user_handle }}
          </p>
        </div>
      </div>

      <div class="content">
        {{ post.caption }}
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">
        <like-dislike />
      </a>
      <a href="#" class="card-footer-item">
        <share />
      </a>
      <a href="#" class="card-footer-item">
        <comments />
      </a>
    </footer>
  </div>
  <br />
  <hr />
  <br />
</template>

<script>
import likeDislike from "./likeDislike.vue";
import share from "./share.vue";
import comments from "./comments.vue";
export default {
  props: {
    post: Object,
  },
  components: {
    likeDislike,
    share,
    comments,
  },
};
</script>

<style scoped>
.card {
  border-radius: 15px;
}
</style>