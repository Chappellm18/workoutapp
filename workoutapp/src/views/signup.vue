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
                      v-model="userEmail"
                      name="userEmail"
                      class="input is-large"
                      type="email"
                      placeholder="Email"
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
                      v-model="userPassword"
                      name="userPassword"
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
                  <a href="../views/login.html">Login</a>
                  <br />
                  <a href="#">Forgot Password?</a>
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
import router from '../router/index.js'

export default {
  data() {
    return {
      userInfo: {
        userEmail: "",
        userPassword: "",
        arr: []
      },
    };
  },
  methods: {
    processForm: function () {
      this.arr = ({email: this.userEmail, password: this.userPassword});
      router.push('/login');
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