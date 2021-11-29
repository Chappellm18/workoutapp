<template>
  <div class="container">
    <br />
    <!-- Page contents #start -->
    <profile :user="Session.user" />
    <!-- Page contents #end -->
    <br />
  </div>
</template>

<script>
import profile from "../components/profileCom.vue";
import Session from "../services/session.js";
export default {
  data() {
    return {
      Session,
    };
  },
  components: {
    profile,
  },
};
</script>

<style>
</style>