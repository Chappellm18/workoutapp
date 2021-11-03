<template>
  <div class="container">
    <hr />
    <br />
    <br />
    <!-- Page contents #start -->
    <div class="columns">
      <div class="column is-one-third">
        <div class="card" style="position: fixed; width: 250px">
          <div class="card-content">
            <social-menu-bar />
          </div>
        </div>
      </div>

      <div class="column is-one-third">
        <div class="post" v-for="p in posts" :key="p.src">
          <post :post="p" />
          <br />
          <br />
        </div>
      </div>

      <div class="column is-one-third">
        <div class="card" style="width: 450px">
          <div class="card-content">
            <ul>
              <li v-for="x in Session.user.following" v-bind:key="x">
                <div class="card" style="overflow: hidden; width: 350px">
                  <div class="card-content">
                    <div class="columns is-gapless">
                      <div class="column">
                        <figure class="image is-96x96">
                          {{ getFData(x) }}
                          <!-- calls the function to load the current following profile image -->
                          <img v-bind:src="pic" />
                        </figure>
                      </div>
                      <div class="column">
                        <a>{{ friendName }}</a>
                        <br />
                        <a>{{ x.handle }}</a>
                        <hr />
                        <div class="level">
                          <div class="level-right">
                            <a>{{ friendProfileMessage }}</a>
                          </div>
                          <div class="level-left">
                            <a>{{ friendFollowerCount }}</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                  </div>
                </div>
                <br />
                <br />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- Page contents #end -->
    <br />
    <br />

    <hr />
  </div>
</template>

<script>
import post from "../components/post.vue";
import Session from "../services/session";
import { GetWall } from "../services/posts";
import SocialMenuBar from "../components/socialMenuBar.vue";
import { GetFriendData } from "../services/users";
export default {
  data() {
    return {
      Session,
      posts: GetWall(Session.user.handle),
      pic: null,
      friendName: null,
      friendFollowerCount: null,
      friendProfileMessage: null,
    };
  },
  components: {
    post,
    SocialMenuBar,
  },
  methods: {
    getFData(x) {
      const holder = GetFriendData(x.handle);
      this.pic = holder[0];
      this.friendName = holder[1];
      this.friendFollowerCount = holder[2];
      this.friendProfileMessage = holder[3];
    },
  },
};
</script>

<style scoped>
</style>