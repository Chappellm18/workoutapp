<template>
  <div class="messages">
    <div
      class="notification is-light"
      :class="`is-${message.type}`"
      v-for="(message, index) in messages"
      v-bind:key="index"
    >
      <button class="delete" @click.prevent="done(index)"></button>
      {{ message.text }}
    </div>
  </div>
</template>

<script>
import Session from "../services/session.js";
export default {
  data() {
    return {
      messages: Session.messages,
    };
  },
  methods: {
    done(i) {
      this.messages.splice(i, 1);
    },
  },
};
</script>

<style>
</style>