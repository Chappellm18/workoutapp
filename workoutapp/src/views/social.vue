<template>
  <div class="container" style="background-color: rgb(247, 241, 234)">
    <!-- navbar #start -->
    <navB />
    <!-- navbar #end -->
    <hr>
    <br>
    <br>
    <!-- Page contents #start -->
    <socials />
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
import socials from '../components/socialPageComponent.vue'
export default {
  components: {
    navB,
    foot,
    socials
  },
};
</script>

<style>
</style>