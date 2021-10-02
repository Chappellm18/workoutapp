<template>
  <body style="background-color: rgb(247, 241, 234)">
    <div class="container">
      <!-- navbar #start -->
      <navB />
      <!-- navbar #end -->
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
      <!-- Footer #start -->
      <foot />
      <!-- Footer #end -->
    </div>
  </body>
</template>

<script>
import navB from "../components/navbar.vue";
import column1 from "../components/column1.vue";
import column2 from "../components/column2.vue";
import column3 from "../components/column3.vue";
import foot from "../components/footer.vue";
export default {
  name: "hub",
  components: {
    navB,
    column1,
    column2,
    column3,
    foot,
  },
};
</script>

<style>
</style>