<template>
  <nav class="panel">
    <p class="panel-heading">Friends</p>
    <div class="panel-block">
      <p class="control has-icons-left">
        <!-- search / -->
      </p>
    </div>
    <p class="panel-tabs">
      <a class="is-active"> Friends </a>
    </p>

    <a class="panel-block is-active">
      <ul>
        <li v-for="friend in friends" :key="friend.handle">
          <a>
            <span class="panel-icon">
              <i class="fas fa-user" aria-hidden="true"></i>
            </span>
            {{ friend.handle }}
          </a>
        </li>
      </ul>
    </a>
  </nav>
</template>

<script>
//import search from "./search.vue";
export default {
  //components: { search },
  props: {
    friends: Array,
  },
};
</script>

<style scoped>
.panel {
  background-color: #f5f5f5;
}
</style>