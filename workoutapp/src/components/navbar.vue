<template>
  <div class="contaiNav" >
    <nav class="navbar" style="background-color: rgb(247, 241, 234);" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img v-bind:src=" `${logo}` " width="112" height="28" />
        </a>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          :class="{ 'is-active': navBarIsActive }"
          @click="navBarIsActive = !navBarIsActive"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': navBarIsActive }">
        <div class="navbar-start">
          
            <router-link to="/" class="navbar-item is-tab" active-class="is-active">Home</router-link>
         
          
            <router-link to="/hub" class="navbar-item is-tab" active-class="is-active">Hub</router-link>
          

          
            <router-link to="/workout" class="navbar-item is-tab" active-class="is-active">Workout Now</router-link>
          

          
            <router-link to="/exercises" class="navbar-item is-tab" active-class="is-active">Exercises</router-link>
          

          <div class="navbar-item has-dropdown is-hoverable">
            <router-link to="/profile" class="navbar-link is-tab" active-class="is-active"> Profile </router-link>

            <div class="navbar-dropdown">
              
                <router-link to="/profile" class="navbar-item is-tab" active-class="is-active">View Profile</router-link>
              
              
                <router-link to="/social" class="navbar-item is-tab" active-class="is-active">View Social</router-link>
              

              <hr class="navbar-divider" />
              
                <router-link to="/settings" class="navbar-item is-tab" active-class="is-active">Settings</router-link>
              
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item" v-if="!signedin">
            <div class="buttons" @click="logged()">
              <a class="button is-primary">
                <router-link to="/signup"><strong>Sign up</strong></router-link>
              </a>
              <a class="button is-light">
                <router-link to="/login">Log in</router-link>
              </a>
            </div>
          </div>

          <div class="navbar-item" v-else>
            <navBprofile />
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import navBprofile from './navBprofile.vue'
export default {
  data() {
    return {
      navBarIsActive: false,
      logo: require("../assets/logo.jpg"),
      signedin: false,
    }
  },
  components: {
    navBprofile
  },
  methods: {
    logged() {
      this.signedin = true;
    },
  }
}
</script>

<style>

</style>