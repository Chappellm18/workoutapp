<template>
  <div class="bg-img">
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column is-4 is-offset-4">
            <div class="box">
              <h3 class="title has-text-black">Welcome Back!</h3>
              <login-form />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import loginForm from "../components/loginForm.vue";
export default {
  components: {
    loginForm,
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