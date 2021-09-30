<template>
  <!-- Suggested workouts -->
    <div class="has-background-info is-one-third" style="padding: 10px; border-radius: 15px;">
      <div class="card">
        <div class="card-image">
          <figure class="image">
            <img src="../assets/suggestedbg.jpg" />
          </figure>
        </div>
      </div>
      <ul>
        <!-- this is the template for the notifaction population -->
        <li v-for="notifaction in notificationsHub" v-bind:key="notifaction.welcome" v-bind:value="notifaction.message">
          <div class="card-content">
            <article
              class="message is-primary"
              :class="{ 'is-hidden': !visible }"
            >
              <div class="message-header">
                <p>{{ `${notifaction.welcome}` }}</p>
                <button
                  class="delete"
                  aria-label="delete"
                  @click="close()"
                ></button>
              </div>
              <div class="message-body">
                <p>{{ `${notifaction.message}` }}</p>
              </div>
            </article>
          </div>
        </li>
      </ul>
      <button class="button is-fullwidth">
        <a
          href="https://www.imleagues.com/spa/account/ssoredirect?schoolId=8416cbb6b1164e498beaf753a4074df3"
        >
          Sign up to Workout
        </a>
      </button>
    </div>

</template>

<script>
export default {
    data() {
        return {
            notificationsHub: [
                { welcome: "Noti", message: "bruh" },
                { welcome: "fasdasdy", message: "bruhbruh" },
                { welcome: "sadasme", message: "bruhbruhbruh" },
            ],
            now: new Date().toLocaleString(), // time
            visible: true,
        }
    },
    mounted() {
            setInterval(() => (this.now = new Date().toLocaleString()), 1000); // update time
    },
    methods: {
        close() {
            this.visible = false; // set visible to false to close element
        },
    }
}
</script>

<style>

</style>