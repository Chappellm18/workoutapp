<template>
  <div
    class="columns is-gapless"
    style="width: 300px; height: 50px; padding: 5px"
  >
    <div class="column">
      <figure class="image is-128x128">
        <img :src="Session.user.pic" alt="profile picture" />
      </figure>
    </div>
    <div class="column">
      <div>
        Hello
        <br />
        {{ Session.user.handle }}
      </div>
    </div>
  </div>
</template>

<script>
import Session from "../services/session.js";

export default {
  data() {
    return {
      Session,
    };
  },
};
</script>

<style scoped>
</style>