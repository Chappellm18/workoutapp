<template>
  <div class="container" style="background-color: rgb(247, 241, 234)">
    <!-- navbar #start -->
    <navB />
    <!-- navbar #end -->
    <hr>
    <br>
    <br>
    <!-- Page contents #start -->
    <div class="columns">
          <div class="column is-one-third is-offset-one-third">
            <div class="post" v-for="p in posts" :key="p.src">
              <post :post="p" />
            </div>
          </div>
          <div class="column is-one-third is-offset-one-third"></div>
          <div class="column is-one-third is-offset-one-third"></div>
        </div>
    <!-- Page contents #end -->
    <br />
    <!-- Footer #start -->
    <foot />
    <!-- Footer #end -->
  </div>
</template>

<script>
import navB from "../components/navbar.vue";
import foot from "../components/footer.vue";
import post from "../components/post.vue";
import session from "../services/session";
import { GetWall } from "../services/posts";
export default {
  data() {
    return {
      posts: GetWall(session.user.handle),
    };
  },
  components: {
    navB,
    foot,
    post
  },
};
</script>

<style>
</style>