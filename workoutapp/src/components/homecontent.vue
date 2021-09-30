<template>

  <div class="container">
    
        <article class="message is-primary" :class="{ 'is-hidden': !visible }">
          <div class="message-header">
            <p>{{notifications[notifyIndex].title}}</p>
            <button
              class="delete"
              aria-label="delete"
              @click="close()"
            ></button>
          </div>
          <div class="message-body">
            {{notifications[notifyIndex].message}}
          </div>
        </article>

        <br />
     

    <ul>
      <li v-for="item in items" v-bind:key="item.id" v-bind:value="item.img">
        <section
          class="hero is-large"
          v-bind:style="{ backgroundImage: 'url(' + `${item.img}` + ')' }"
        >
          <div class="hero-body">
            <a v-bind:href=" `${item.link}` " class="is-size-1 has-text-left has-text-weight-bold has-text-danger-light">
              {{ `${item.message}` }}
            </a>
          </div>
        </section>
        <br />
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
      items: [
        { title: "background1", img: require("../assets/bgimg.jpg"), id: 1, message: "Get Outdoors", link: "https://www.traillink.com/activity/hiking-trails/" },
        { title: "background2", img: require("../assets/homebg1.jpg"), id: 2, message: "Gym Day", link: "https://www.imleagues.com/spa/account/ssoredirect?schoolId=8416cbb6b1164e498beaf753a4074df3" },
        { title: "background3", img: require("../assets/homebg2.jpg"), id: 3, message: "Something will go here", link: "" },
      ],
      notifications: [
        { title: "notify", message: "Message about stuff", id: 1 },
        { title: "notify 2", message: "Message about other stuff", id: 2 },
      ],
      notifyIndex: 0
    };
  },
  methods: {
    close() {
      if (this.notifyIndex < this.notifications.length-1) {
        this.notifyIndex++;
      }
      else {
        this.visible = false;
      }
    },
  },
};
</script>

<style>
</style>