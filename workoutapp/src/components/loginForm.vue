<template>
  <form @submit.prevent="login()">
    <div class="field">
      <div class="control has-icons-left">
        <span class="icon has-icons-left">
          <i class="fa fa-user is-left"></i>
        </span>
        <input
          v-model="handle"
          name="handle"
          class="input is-large"
          type="text"
          placeholder="Handle"
          autofocus=""
        />
      </div>
    </div>

    <div class="field">
      <div class="control has-icons-left">
        <span class="icon has-icons-left">
          <i class="fa fa-unlock-alt is-left"></i>
        </span>
        <input
          v-model="password"
          name="password"
          class="input is-large"
          type="password"
          placeholder="Password"
        />
      </div>
    </div>
    <div class="field">
      <label class="checkbox"> <input type="checkbox" /> Remember me </label>
    </div>
    <button type="submit" class="button is-block is-info is-large is-fullwidth">
      Login

      <i class="fa fa-sign-in" aria-hidden="true"></i>
    </button>
    <p class="has-text-grey">
      <router-link to="/signup">Sign Up</router-link>
      <br />
      <a href="#">Forgot Password</a>
    </p>
  </form>
</template>

<script>
import Session from "../services/session.js";
export default {
  name: "navB",
  data() {
    return {
      Session,
      handle: null,
      password: null,
    };
  },
  methods: {
    login() {
      this.Session.Login(this.handle, this.password);
    },
  },
};
</script>

<style>
</style>