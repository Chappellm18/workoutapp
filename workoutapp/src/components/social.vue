<template>
  <div>
    <ul style="display: grid;grid-template-columns:repeat(3,1fr);">
      <li
        v-for="social in socialFeed"
        v-bind:key="social.id"
        v-bind:value="social.message"
        style="display: inline; padding: 20px;"
      >
     
              <div class="box">
          <article class="media">
            <div class="media-left">
              <figure class="image is-128x128">
                <img v-bind:src="`${social.image}`" alt="Image" />
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>{{ `${social.profileName}` }}</strong><small>{{ `${social.profileHandle}` }}</small><small> -{{ `${social.timeAgo}` }}</small>
                  <br />
                  {{ `${social.message}` }}
                </p>
              </div>
            </div>
          </article>
        </div>
          
     
        
        <br />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socialFeed: [
        {
          message: "This is a sample post",
          image: require("../assets/suggestedbg.jpg"),
          profileName: "random profile",
          profileHandle: "@random",
          timeAgo: "10m",
        },
        {
          message: "This is a sample post",
          image: require("../assets/suggestedbg.jpg"),
          profileName: "random profile",
          profileHandle: "@random",
          timeAgo: "15m",
        },
        {
          message: "This is a sample post",
          image: require("../assets/suggestedbg.jpg"),
          profileName: "random profile",
          profileHandle: "@random",
          timeAgo: "30m",
        },
        {
          message: "This is a sample post",
          image: require("../assets/suggestedbg.jpg"),
          profileName: "random profile",
          profileHandle: "@random",
          timeAgo: "30m",
        },
        {
          message: "working out",
          image: require("../assets/suggestedbg.jpg"),
          profileName: "random profile",
          profileHandle: "@bruh man",
          timeAgo: "1h",
        },
        {
          message: "Great workout today",
          image: require("../assets/suggestedbg.jpg"),
          profileName: "rprofile",
          profileHandle: "@some guy",
          timeAgo: "15m",
        },
      ],
    };
  },
};
</script>

<style>

</style>
