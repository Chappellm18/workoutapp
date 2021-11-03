<template>
  <body>
    <div class="container">
      <br />

      <br />
      <!-- Page contents #start -->
      <div class="columns is-3">
        <div class="column">
          <column1 />
        </div>
        <div class="column">
          <column2 />
        </div>
        <div class="column">
          <column3 />
        </div>
      </div>

      <!-- Page contents #end -->
      <br />
      <br />
    </div>
  </body>
</template>

<script>
import column1 from "../components/column1.vue";
import column2 from "../components/column2.vue";
import column3 from "../components/column3.vue";

export default {
  name: "hub",
  components: {
    column1,
    column2,
    column3,
  },
};
</script>

<style>
</style>