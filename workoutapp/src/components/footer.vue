<template>
  <footer class="footer">
    <br />
    <br />
    <br />
    <div class="content has-text-centered">
      <p>
        <strong>Workout app</strong> by
        <a href="https://github.com/Chappellm18">Mitch Chappell</a>.
      </p>
    </div>
    <br />
    <br />
    <div class="level">
      <div class="level-item">
        <div class="github"></div>
      </div>

      <div class="level-item">
        <div class="newpaltz"></div>
      </div>
      <br />
      <br />
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  background-color: rgba(11, 3, 38, 0.8);
  padding: 25px;
}
.github {
  background-image: url("../assets/github.png");
  background-size: contain;
  height: 64px;
  width: 64px;
}
.newpaltz {
  background-image: url("../assets/nplogo.jpg");
  background-size: contain;
  height: 64px;
  width: 64px;
}
</style>