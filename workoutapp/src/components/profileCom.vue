<template>
  <div class="profile-container">
    <div class="columns">
      <div class="column is-half">
        <img :src="user.pic" alt="profile-image" />
      </div>
      <div class="column is-one-quarter">
        <h1>{{ user.firstName }}</h1>
        <h1>{{ user.lastName }}</h1>
        <h1>{{ user.handle }}</h1>
      </div>
    </div>

    <br />
    <hr />
    <br />
    <div class="columns">
      <div class="column">
        <div class="friends">
          <friend-panel :friends="user.following" />
        </div>
      </div>
      <div class="column">
        <div class="posts">
          <div class="post" v-for="(p, i) in myPosts" :key="p.src">
            <post :post="p" @remove="remove(p, i)" />
            <br />
          </div>
        </div>
      </div>
    </div>
    <div class="editprofile">
      <button class="button is-primary" @click="isActive = !isActive">
        Edit Profile
      </button>
    </div>
    <div class="modal" :class="{ 'is-active': isActive }">
      <div class="modal-background"></div>
      <div class="modal-content">
        <editprofile-form />
      </div>
      <button
        class="modal-close is-large"
        @click="isActive = !isActive"
        aria-label="close"
      ></button>
    </div>
  </div>
</template>

<script>
import { GetWall } from "../services/posts";
import post from "./post";
import Session from "../services/session";
import FriendPanel from "./friend-panel.vue";
import EditprofileForm from "./editprofileForm.vue";

export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
    posts: {
      type: Object,
      required: true,
    },
  },
  components: {
    FriendPanel,
    post,
    EditprofileForm,
  },
  data() {
    return {
      Session,
      myPosts: [],
      isActive: false,
    };
  },
  async mounted() {
    this.myPosts = await GetWall(this.Session.user.handle);
  },
};
</script>

<style>
</style>