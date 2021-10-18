<template>
  <body style="background-color: rgb(247, 241, 234)">
    <div class="container">
      <!-- Page content #start -->

      <hr />
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

      <socialComponent />

      <br />
      <br />
      <br />
      <!-- Page content #end -->
    </div>
  </body>
</template>

<script>
import homecon from "../components/homecontent.vue";
import socialComponent from "../components/socialComponent.vue";
import workoutMonthly from "../components/workoutMonthly.vue";
export default {
  data() {
    return {
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

    socialComponent,
    workoutMonthly,
  },
};
</script>

<style>
</style>