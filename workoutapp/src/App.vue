<template>
  <html style="background-color: rgba(11, 3, 38, 0.8)">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Get Fit</title>
    </head>
    <div class="nav">
      <navB />
    </div>
    <div class="notifictions">
      <messages />
    </div>

    <br />
    <router-view />
    <br />
    <div class="footr">
      <foot />
    </div>
  </html>
</template>

<style>
hr {
  background-color: rgba(236, 236, 155, 0.918);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #727aa5;
}
</style>
<script>
import navB from "./components/navbar.vue";
import messages from "./components/messages.vue";
import foot from "./components/footer.vue";
export default {
  data() {
    return {};
  },
  components: {
    navB,
    messages,
    foot,
  },
};
</script>