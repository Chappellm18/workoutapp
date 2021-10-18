<template>
  <html style="background-color: rgb(247, 241, 234)">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Get Fit</title>
    </head>
    <navB />
    <br />
    <messages />
    <br />
    <router-view />
    <br />
    <foot />
  </html>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<script>
import navB from "./components/navbar.vue";
import messages from "./components/messages.vue";
import foot from "./components/footer.vue";
export default {
  components: {
    navB,
    messages,
    foot,
  },
};
</script>