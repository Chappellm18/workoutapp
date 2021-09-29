<template>
<div class="contaiNav">
  <nav class="navbar" role="navigation" aria-label="main navigation">
      
            <div class="navbar-brand">
              <a class="navbar-item" href="/">
                <img src="'url(' + {{ `${logo}` }} + ')'" width="112" height="28">
              </a>
          
              <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" :class="{ 'is-active': navBarIsActive }" @click="navBarIsActive = !navBarIsActive" >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
          
            <div class="navbar-menu" :class="{ 'is-active': navBarIsActive }">
              <div class="navbar-start">
                <a class="navbar-item">
                  <router-link to="/">Home</router-link>
                </a>
          
                <a class="navbar-item">
                  <router-link to="/workout">Workout Now</router-link>
                </a>
          
                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link">
                    Profile
                  </a>
          
                  <div class="navbar-dropdown">
                    <a class="navbar-item">
                      <router-link to="/profile">View Profile</router-link>
                    </a>
                    <a class="navbar-item">
                      <router-link to="/stats">View Stats</router-link>
                    </a>
                    <a class="navbar-item">
                      <router-link to="/exercises">Exercises</router-link>
                    </a>
                    <hr class="navbar-divider">
                    <a class="navbar-item">
                      <router-link to="/settings">Settings</router-link>
                    </a>
                  </div>
                </div>
              </div>
          
              <div class="navbar-end">

                <div class="navbar-item" v-if="!signedin">
                  <div class="buttons">
                    <a class="button is-primary">
                      <router-link to="/signup"><strong>Sign up</strong></router-link>
                    </a>
                    <a class="button is-light">
                      <router-link to="/login">Log in</router-link>
                    </a>
                  </div>
                </div>

                <div class="navbar-item" v-else>
                  <div class="buttons">
                    <a class="button is-primary">
                      settings
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </nav>
</div>
</template>

<script>
export default {
    data() {
        return {
            navBarIsActive: false,
            logo: require("../assets/logo.jpg"),
            signedin: false
        }
    }
}
</script>

<style>
.contaiNav {
    height: 100px;

}
</style>