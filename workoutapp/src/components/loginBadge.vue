<template>
  <div class="card">
    <div class="navbar-end">
          <div class="navbar-item" v-if="!Session.user">
            <div class="buttons">
              <a class="button is-primary">
                <router-link to="/signup"><strong>Sign up</strong></router-link>
              </a>
              <a class="button is-light">
                <router-link to="/login">Log in</router-link>
              </a>
            </div>
          </div>

          <div class="navbar-item" v-else>
            <profileBadge />
          </div>
    </div>
  </div>
</template>

<script>
import profileBadge from "../components/profileBadge.vue";
import Session from '../services/session'
export default {
  data() {
    return {
      Session
    };
  },
  components: {
    profileBadge,
  },
};
</script>

<style>

</style>