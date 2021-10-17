<template>
  <div class="card-content">
      <div>Hello {{ name }}</div>
    </div>
</template>

<script>
import Session from "../services/session.js";

export default {
  data() {
    return {
      Session
    }
  },
  computed: {
    name() {
      return Session.user.firstName + ' ' + Session.user.lastName;
    }
  }
};
</script>

<style>

</style>