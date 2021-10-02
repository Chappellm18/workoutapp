<template>
  <div class="level">
    <div class="level-left">
      <!-- right content actions sidebar-->

      <div class="level-item has-text-left">
        <aside class="menu has-text-left">
          <p class="menu-label">General</p>
          <ul class="menu-list">
            <li><a>Dashboard</a></li>
            <li><a>Customers</a></li>
          </ul>
          <p class="menu-label">Administration</p>
          <ul class="menu-list">
            <li><a>Team Settings</a></li>
            <li>
              <a class="is-active">Manage Your Team</a>
              <ul>
                <li><a>Members</a></li>
                <li><a>Plugins</a></li>
                <li><a>Add a member</a></li>
              </ul>
            </li>
            <li><a>Invitations</a></li>
            <li><a>Cloud Storage Environment Settings</a></li>
            <li><a>Authentication</a></li>
          </ul>
          <p class="menu-label">Transactions</p>
          <ul class="menu-list">
            <li><a>Payments</a></li>
            <li><a>Transfers</a></li>
            <li><a>Balance</a></li>
          </ul>
        </aside>
      </div>
    </div>
    <div class="level-item">
      <!-- center content posts-->

      <ul>
        <li
          v-for="post in postObjects"
          v-bind:key="post.id"
          v-bind:value="post.message"
        >
          <div class="card" v-if="hasImg">
            <div class="card-image">
              <figure class="image is-4by3">
                <img v-bind:src="`${post.img}`" alt="Users image not loading" />
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
    <div class="level-right">
      <!-- left content friends sidebar -->
      <div class="level-item has-text-right">
        <hr />
        <div class="box">
          <ul>
            <li
              v-for="friend in friendObjects"
              v-bind:key="friend.id"
              v-bind:value="friend.username"
            >
              <div class="card">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img
                        v-bind:src="`${friend.img}`"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">{{ friend.username }}</p>
                  </div>
                </div>
              </div>
              <br />
            </li>
          </ul>
        </div>
      </div>
    </div>
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
      friendObjects: [
        { username: "joeman12", img: require("../assets/bgimg.jpg"), id: 1 },
        { username: "frankman12", img: require("../assets/bgimg.jpg"), id: 2 },
        { username: "bobman12", img: require("../assets/bgimg.jpg"), id: 3 },
        { username: "jimman12", img: require("../assets/bgimg.jpg"), id: 4 },
        { username: "manman12", img: require("../assets/bgimg.jpg"), id: 5 },
        { username: "manman12", img: require("../assets/bgimg.jpg"), id: 6 },
        { username: "manman12", img: require("../assets/bgimg.jpg"), id: 7 },
        { username: "manman12", img: require("../assets/bgimg.jpg"), id: 8 },
        { username: "manman12", img: require("../assets/bgimg.jpg"), id: 9 },
      ],
    };
  },
};
</script>

<style>
.box {
  width: 20em;
  height: 100%;
  left: 0;
}
</style>