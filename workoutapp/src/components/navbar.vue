<template>
  <div class="contaiNav">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img v-bind:src="`${logo}`" width="112" height="28" />
        </a>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          :class="{ 'is-active': navBarIsActive }"
          @click="navBarIsActive = !navBarIsActive"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': navBarIsActive }">
        <div class="navbar-start">
          <router-link
            to="/"
            class="navbar-item is-tab"
            active-class="is-active"
            >Home</router-link
          >

          <router-link
            to="/hub"
            class="navbar-item is-tab"
            active-class="is-active"
            >Hub</router-link
          >

          <router-link
            to="/workout"
            class="navbar-item is-tab"
            active-class="is-active"
            >Workout Now</router-link
          >

          <router-link
            to="/exercises"
            class="navbar-item is-tab"
            active-class="is-active"
            >Exercises</router-link
          >

          <div class="navbar-item has-dropdown is-hoverable">
            <router-link
              to="/profile"
              class="navbar-link is-tab"
              active-class="is-active"
            >
              Profile
            </router-link>

            <div class="navbar-dropdown">
              <router-link
                to="/profile"
                class="navbar-item is-tab"
                active-class="is-active"
                >View Profile</router-link
              >

              <router-link
                to="/social"
                class="navbar-item is-tab"
                active-class="is-active"
                >View Social</router-link
              >
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <loginBadge />
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Session from "../services/session.js";
import loginBadge from "./loginBadge.vue";
export default {
  data() {
    return {
      Session,
      navBarIsActive: false,
      logo: require("../assets/logo.jpg"),
      signedin: false,
    };
  },
  components: {
    loginBadge,
  },
};
</script>

<style scoped>
.contaiNav {
  width: 80%;

  margin: 0 auto;
}
.navbar {
  background-color: rgb(196, 181, 247);
  height: 75px;
}
</style>