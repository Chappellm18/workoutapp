<template>
  <body>
    <div class="container">
      <!-- Page contents #start -->
      <exercises />
      <!-- Page contents #end -->
    </div>
  </body>
</template>

<script>
import exercises from "../components/exercises.vue";
export default {
  components: {
    exercises,
  },
};
</script>

<style scoped>
.container {
  padding: 0;
  margin: 0 auto;
}
</style>