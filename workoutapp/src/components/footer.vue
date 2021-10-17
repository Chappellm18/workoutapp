<template>
  <footer
    class="footer"
    style="background-color: rgb(247, 241, 234); padding: 25px"
  >
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
    <div class="columns is-4">
      <div class="column is-one-third has-text-center">
        <a>Other Links</a>
        <hr />
        <ul>
          <li><a>here</a></li>
          <li><a>here</a></li>
          <li><a>here</a></li>
          <li><a>here</a></li>
          <li><a>here</a></li>
        </ul>
      </div>
      <div class="column is-one-third has-text-center">
        <a>Site Map</a>
        <hr />
        <ul>
          <li><a><router-link to="/">Home</router-link></a></li>
          <li><a><router-link to="/hub">Hub</router-link></a></li>
          <li><a><router-link to="/workout">Workout</router-link></a></li>
          <li><a><router-link to="/profile">Profile</router-link></a></li>
        </ul>
      </div>
      <div class="column is-one-third has-text-center">
        <a>Contact/Support</a>
        <hr />
        <ul>
          <li><a><router-link to="/contact">Contact Me</router-link></a></li>
          <li><a href="#">Email</a></li>
          <li><a href="https://github.com/Chappellm18">Github</a></li>
          <li><a href="https://www.newpaltz.edu/">School</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
</style>