<template>
  <html>
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

<style>
hr {
  background-color: rgba(236, 236, 155, 0.918);
}

@font-face {
  font-family: wkfont;
  src: url("../src/assets/ApexMk2-BoldExtended.otf");
}
#app {
  font-family: wkfont;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #d5d7e4;
}
template {
  font-family: wkfont;
}
html {
  background: rgba(67, 95, 148, 0.753);
}
</style>

