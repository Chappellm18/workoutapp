<template>

  <div class="container">
    <ul>
      <li
        v-for="item in notifactions"
        v-bind:key="item.id"
        v-bind:value="item.message"
      >
        <article class="message is-primary" :class="{ 'is-hidden': !visible }">
          <div class="message-header">
            <p>{{`${item.title}`}}</p>
            <button
              class="delete"
              aria-label="delete"
              @click="close()"
            ></button>
          </div>
          <div class="message-body">
            {{ `${item.message}` }}
          </div>
        </article>
      </li>
    </ul>

    <ul>
      <li v-for="item in items" v-bind:key="item.id" v-bind:value="item.img">
        <section
          class="hero is-medium"
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
        { title: "notify", message: require("../assets/bgimg.jpg"), id: 1 },
      ],
    };
  },
  methods: {
    close() {
      this.visible = false;
    },
  },
};
</script>

<style>
</style>