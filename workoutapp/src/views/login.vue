<template>
  <div class="bg-img">
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column is-4 is-offset-4">
            <div class="box">
              <h3 class="title has-text-black">Welcome Back!</h3>
              <form id="signup-form" @submit.prevent="login()">
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
                  <label class="checkbox">
                    <input type="checkbox" /> Remember me
                  </label>
                </div>
                <button
                  type="submit"
                  class="button is-block is-info is-large is-fullwidth"
                  @click="login"
                >
                  Login

                  <i class="fa fa-sign-in" aria-hidden="true"></i>
                </button>
                <p class="has-text-grey">
                  <router-link to="/signup">Sign Up</router-link>
                  <br />
                  <a href="#">Forgot Password</a>
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
import { Session } from "../services/session";
export default {
  name: "navB",
  data() {
    return {
      Session,
      handle: "",
      password: "",
    };
  },
  methods: {
    login() {
      Session.Login(this.handle, this.password);
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