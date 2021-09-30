<template>
  <div class="container" style="background-color: rgb(247, 241, 234)">
    <!-- navbar #start -->
    <navB />
    <!-- navbar #end -->
    <br />
    <!-- Page contents #start -->
    <profile />
    <!-- Page contents #end -->
    <br />
    <!-- Footer #start -->
    <foot />
    <!-- Footer #end -->
  </div>
</template>

<script>
import navB from "../components/navbar.vue";
import foot from "../components/footer.vue";
import profile from "../components/profileCom.vue";
export default {
  components: {
    navB,
    foot,
    profile,
  },
};
</script>

<style>
</style>