<template>
  <div class="columns is-2">
    <div class="column is-one-third">
      <section class="section is-large is-primary">
        <aside class="menu has-text-left">
          <p class="menu-label">Upper Body</p>
          <ul class="menu-list">
            <li>
              <a class="is-active">Hit The Gym</a>
              <ul :class="{ 'is-hidden': show }">
                <li><a>workout1</a></li>
                <li><a>workout1</a></li>
                <li><a>workout1</a></li>
                <li><a>workout1</a></li>
              </ul>
            </li>
            <li>
              <a class="is-active">Outdoors</a>
              <ul :class="{ 'is-hidden': show }">
                <li><a>workout1</a></li>
                <li><a>workout1</a></li>
                <li><a>workout1</a></li>
                <li><a>workout1</a></li>
              </ul>
            </li>
            <li>
              <a class="is-active">At Home</a>
              <ul :class="{ 'is-hidden': show }">
                <li><a>workout1</a></li>
                <li><a>workout1</a></li>
                <li><a>workout1</a></li>
                <li><a>workout1</a></li>
              </ul>
            </li>
          </ul>
          <p class="menu-label">Cardio</p>
          <ul class="menu-list">
            <li>
              <a class="is-active">Hit The Gym</a>
              <ul :class="{ 'is-hidden': show }">
                <li><a>Treadmill</a></li>
                <li><a>Bike</a></li>
                <li><a>Lift</a></li>
                <li><a>Swim</a></li>
              </ul>
            </li>
            <li>
              <a class="is-active">Outside</a>
              <ul :class="{ 'is-hidden': show }">
                <li><a>Run</a></li>
                <li><a>Bike</a></li>
                <li><a>Swim</a></li>
                <li><a>Other</a></li>
              </ul>
            </li>
            <li>
              <a class="is-active">At Home</a>
              <ul :class="{ 'is-hidden': show }">
                <li><a>workout1</a></li>
                <li><a>workout1</a></li>
                <li><a>workout1</a></li>
                <li><a>workout1</a></li>
              </ul>
            </li>
          </ul>
          <p class="menu-label">Core</p>
          <ul class="menu-list">
            <li>
              <a class="is-active">Hit The Gym</a>
              <ul :class="{ 'is-hidden': show }">
                <li><a>workout1</a></li>
                <li><a>workout1</a></li>
                <li><a>workout1</a></li>
                <li><a>workout1</a></li>
              </ul>
            </li>
            <li>
              <a class="is-active">In the Fresh Air</a>
              <ul :class="{ 'is-hidden': show }">
                <li><a>workout1</a></li>
                <li><a>workout1</a></li>
                <li><a>workout1</a></li>
                <li><a>workout1</a></li>
              </ul>
            </li>
            <li>
              <a class="is-active">At Home</a>
              <ul :class="{ 'is-hidden': show }">
                <li><a>workout1</a></li>
                <li><a>workout1</a></li>
                <li><a>workout1</a></li>
                <li><a>workout1</a></li>
              </ul>
            </li>
          </ul>
        </aside>
      </section>
    </div>
    <div class="column is-two-thirds">
<section class="section is-large is-primary"></section>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            show: false
        }
    }
};
</script>

<style>
</style>