<template>
  <body>
    <div class="container">
      <!-- Page content #start -->

      <hr />
      <div class="notif">
        <notifiy />
      </div>

      <br />
      <br />

      <homecon />

      <br />
      <hr />
      <br />

      <workoutMonthly />

      <br />
      <hr />
      <br />

      <div class="posts" v-if="!Session.user">
        <nopost />
      </div>
      <div class="noposts" v-else>
        <nopost />
      </div>

      <br />
      <br />
      <br />
      <!-- Page content #end -->
    </div>
  </body>
</template>

<script>
import homecon from "../components/homecontent.vue";
import Nopost from "../components/nopost.vue";
import notifiy from "../components/notifiy.vue";
//import post from "../components/post.vue";
import workoutMonthly from "../components/workoutMonthly.vue";
import Session from "../services/session.js";
export default {
  data() {
    return {
      Session,
      counter: 3,
      now: new Date().toLocaleString(),
      visible: true,
      navBarIsActive: false,
    };
  },
  mounted() {
    setInterval(() => (this.now = new Date().toLocaleString()), 1000);
  },
  methods: {
    grow() {
      this.counter += 10;
    },
    close() {
      this.visible = false;
    },
  },
  components: {
    homecon,
    Nopost,
    //post,
    workoutMonthly,
    notifiy,
  },
};
</script>

<style>
</style>