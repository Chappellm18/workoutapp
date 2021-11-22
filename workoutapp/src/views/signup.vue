<template>
  <div class="bg-img">
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column is-4 is-offset-4">
            <div class="box">
              <h3 class="title has-text-black">Welcome!</h3>
              <form id="signup-form" @submit.prevent="processForm">
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
                      placeholder="handle"
                      autofocus=""
                    />
                  </div>
                </div>
                <div class="field">
                  <div class="control has-icons-left">
                    <span class="icon has-icons-left">
                      <i class="fa fa-user is-left"></i>
                    </span>
                    <input
                      v-model="firstName"
                      name="firstName"
                      class="input is-large"
                      type="text"
                      placeholder="firstName"
                      autofocus=""
                    />
                  </div>
                </div>
                <div class="field">
                  <div class="control has-icons-left">
                    <span class="icon has-icons-left">
                      <i class="fa fa-user is-left"></i>
                    </span>
                    <input
                      v-model="lastName"
                      name="lastName"
                      class="input is-large"
                      type="text"
                      placeholder="lastName"
                      autofocus=""
                    />
                  </div>
                </div>
                <div class="field">
                  <div class="control has-icons-left">
                    <span class="icon has-icons-left">
                      <i class="fa fa-user is-left"></i>
                    </span>
                    <input
                      v-model="email"
                      name="email"
                      class="input is-large"
                      type="email"
                      placeholder="email"
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

                <button
                  type="submit"
                  class="button is-block is-info is-large is-fullwidth"
                >
                  Sign Up
                  <i class="fa fa-sign-in" aria-hidden="true"></i>
                </button>
                <hr />
                <p class="has-text-grey">
                  <router-link to="/login">Have an account? Login</router-link>
                  <br />
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import router from "../router/index.js";
import Session from "../services/session.js";
import { Add } from "../services/users.js";
export default {
  data() {
    return {
      firstName: null,
      lastName: null,
      handle: null,
      pic: null,
      password: null,
      email: null,
      Session,
    };
  },
  methods: {
    processForm: function () {
      Add(this.user);
      router.push("/login");
    },
  },
};
</script>

<style>
.bg-img {
  background-image: url("../assets/bgimg.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #999;
  margin: 0;
}
</style>