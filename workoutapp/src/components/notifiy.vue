<template>
  <div class="notifications">
    <article class="message" :class="{ 'is-hidden': !visible }">
      <div class="message-header">
        <p>{{ notifications[notifyIndex].title }}</p>
        <button class="delete" aria-label="delete" @click="close()"></button>
      </div>
      <div class="message-body">
        {{ notifications[notifyIndex].message }}
      </div>
    </article>
    <div class="if" v-if="visible"><hr /></div>
    <div class="else" v-else></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
      notifications: [
        { title: "notify", message: "Message about stuff", id: 1 },
        { title: "notify 2", message: "Message about other stuff", id: 2 },
      ],
      notifyIndex: 0,
    };
  },
  methods: {
    close() {
      if (this.notifyIndex < this.notifications.length - 1) {
        this.notifyIndex++;
      } else {
        this.visible = false;
      }
    },
  },
};
</script>

<style scoped>
.message {
  border: solid rgba(110, 110, 235, 0.87);
  border-radius: 15px 45px 15px 45px;
  overflow: hidden;
}
</style>