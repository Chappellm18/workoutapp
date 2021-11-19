<template>
  <div>
    <div class="buttons" v-if="!Session.user">
      <a class="button is-primary">
        <router-link to="/signup"><strong>Sign up</strong></router-link>
      </a>
      <a class="button is-light">
        <router-link to="/login">Log in</router-link>
      </a>
    </div>
    <div v-else>
      <profileBadge />
    </div>
  </div>
</template>

<script>
import profileBadge from "./profileBadge.vue";
import Session from "../services/session";
export default {
  data() {
    return {
      Session,
    };
  },
  components: {
    profileBadge,
  },
};
</script>

<style scoped>
</style>