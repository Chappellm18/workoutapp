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
    <br />
    <div class="googlebut">
      <div class="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>
    </div>

    <br />
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
    onSignIn(googleUser) {
      // Useful data for your client-side scripts:
      var profile = googleUser.getBasicProfile();
      console.log("ID: " + profile.getId()); // Don't send this directly to your server!
      console.log("Full Name: " + profile.getName());
      console.log("Given Name: " + profile.getGivenName());
      console.log("Family Name: " + profile.getFamilyName());
      console.log("Image URL: " + profile.getImageUrl());
      console.log("Email: " + profile.getEmail());

      // The ID token you need to pass to your backend:
      var id_token = googleUser.getAuthResponse().id_token;
      console.log("ID Token: " + id_token);
    },
    googleSignin() {
      gapi.load("auth2", () => {
        gapi.auth2
          .init({
            client_id: process.env.VUE_APP_GOOGLE_CLIENT_ID,
          })
          .then()
          .then(() => {
            auth = gapi.auth2.getAuthInstance();
            auth.signIn().then((user) => {
              console.log(user);
            });
          });
      });
    },
  },
};
/* global gapi */
let auth;
const tag = document.createElement("script");
tag.id = "google-auth-scipt";
tag.src = "https://apis.google.com/js/platform.js";
document.head.append(tag);

const tag1 = document.createElement("meta");
tag1.name = "google-signin-client_id";
tag1.content =
  process.env.VUE_APP_GOOGLE_CLIENT_ID ||
  "132296799055-etposvucdaso34fg6q0l05m987eg4s39.apps.googleusercontent.com";
document.head.append(tag1);

const tag2 = document.createElement("meta");
tag2.name = "google-signin-scope";
tag2.content = "profile email";
document.head.append(tag2);
</script>

<style scoped>
.googleBut {
  height: 25px;
}
</style>