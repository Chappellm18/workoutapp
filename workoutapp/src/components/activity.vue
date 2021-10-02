<template>
  <div>
      <ul>
          <li
            v-for="post in postObjects"
            v-bind:key="post.id"
            v-bind:value="post.message"
          >
            <div class="card" v-if="hasImg">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    v-bind:src="`${post.img}`"
                    alt="Users image not loading"
                  />
                </figure>
              </div>
              <hr />

              <div class="card-content">
                <strong
                  ><p class="title is-4">{{ post.userName }}</p></strong
                ><small>
                  <p class="subtitle is-6">{{ post.userId }}</p></small
                >
              </div>
              <div class="content">
                {{ post.postMessage }}
                <br />
                <time datetime="2016-1-1">{{ post.time }}</time>
              </div>
            </div>
            <div class="card" v-else>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <strong
                      ><p class="title is-4">{{ post.userName }}</p></strong
                    ><small
                      ><p class="subtitle is-6">{{ post.userId }}</p></small
                    >
                  </div>
                </div>
                <div class="content">
                  {{ post.postMessage }}
                  <br />
                  <time datetime="2016-1-1">{{ post.time }}</time>
                </div>
              </div>
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
     
      postObjects: [
        {
          hasImg: false,
          img: "null",
          postMessage: "nihil ipsum!",
          userName: "john",
          userId: "@john",
          time: new Date().toLocaleString(),
          id: 1,
        },
        {
          hasImg: true,
          img: require("../assets/bgimg.jpg"),
          postMessage: "random words banana apple ok yep",
          userName: "phil",
          userId: "@phil",
          time: new Date().toLocaleString(),
          id: 2,
        },
        {
          hasImg: true,
          img: require("../assets/bgimg.jpg"),
          postMessage: "random words banana apple ok yep",
          userName: "phil",
          userId: "@phil",
          time: new Date().toLocaleString(),
          id: 3,
        },
        {
          hasImg: true,
          img: require("../assets/bgimg.jpg"),
          postMessage: "random words banana apple ok yep",
          userName: "phil",
          userId: "@phil",
          time: new Date().toLocaleString(),
          id: 4,
        },
      ],
      
    }
  },
}
</script>

<style>

</style>