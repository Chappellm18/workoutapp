<template>
  <div class="level-container">
    <div class="level">
      <div class="level-item ">
        <!-- content -->

        <div class="card" style="width: 800px;">
          <header class="card-header">
            <p class="card-header-title">
              <a class="is-size-5">Seach Posts or People</a>
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <!-- search bar -->
              <div class="field has-addons is-horizontal">
                <div class="control" style="width: 750px;">
                  <input
                    class="input is-rounded is-medium"
                    type="text"
                    placeholder="Find a post"
                    
                  />
                </div>
                <div class="control">
                  <a class="button is-rounded is-medium is-info"> Search </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      <!-- content -->
    </div>
    <br>
    <hr />
    <div class="level">
      <div class="level-left fixed">
        <!-- right content actions sidebar-->

        <div class="level-item has-text-left">
          <aside class="menu has-text-left">
            <p class="menu-label">General</p>
            <ul class="menu-list">
              <li><a>Add Friend</a></li>
              <li><a>Search</a></li>
            </ul>
            <p class="menu-label">Post</p>
            <ul class="menu-list">
              <li><a>Post now</a></li>
              <li>
                <a>Manage Your Posts</a>
              </li>
            </ul>
            <p class="menu-label">User</p>
            <ul class="menu-list">
              <li><a>do something</a></li>
              <li><a>do something</a></li>
              <li><a>do something</a></li>
            </ul>
          </aside>
        </div>
      </div>
      <div class="level-item">
        <div>
          <!-- center content posts-->
          <div class="tabs is-centered" style="top: 0;">
            <ul>
              <li><a @click="setTab('A')">Activity</a></li>
              <li><a @click="setTab('U')">Users</a></li>
            </ul>
          </div>
          <div v-if="tab == 'A'"><activity /></div>
          <div v-else><users /></div>
        </div>
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
  </div>
</template>

<script>
import activity from "../components/activity.vue";
import users from "../components/users.vue";
export default {
  data() {
    return {
      tab: "A",
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
  components: {
    activity,
    users,
  },
  methods: {
    setTab(x) {
      if (x == "U") {
        this.tab = "U";
      } else {
        this.tab = "A";
      }
    },
  },
};
</script>

<style>
.box {
  width: 20em;
  height: max-content;
  left: 0;
  
  top: 300px;
}
.fixed {
  right: 0;
  width: 20em;
  height: max-content;

}
</style>