<template>
  <div>
    <div class="level">
      <div class="level-item" id="profilepicture">
        <div class="card">
          <div class="card-image">
            <figure class="image is-3by5">
              <img
                src="{{ `${profileImg}` }}"
                alt="Placeholder image"
              />
            </figure>
          </div>
        </div>
      </div>
      <div class="level-item" id="bio">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">{{ `${bot.title}` }}</p>
            <button
              class="card-header-icon"
              aria-label="more options"
              @click="next()"
            >
              <span class="icon">
                <i class="fas fa-angle-right" aria-hidden="true"></i>
              </span>
            </button>
          </header>
          <div class="card-content">
            <div class="content">
              {{ `${bot.message}` }}
              <br />
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="level">
      <div class="level-item" id="stuff1">
        
      </div>
      <div class="level-item" id="stuff2">

      </div>
    </div>

    <nav class="level">
      
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Workout Time</p>
          <p class="title">{{ `${workoutTime}` }}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Following</p>
          <p class="title">{{ `${following}` }}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Followers</p>
          <p class="title">{{ `${followers}` }}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Weekly Calories</p>
          <p class="title">{{ `${weeklyCals}` }}</p>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bot: { title: "Workout Bot", message: "stuff here" },
      botIndex: 0,
      botMessages: [
        { title: "Workout Bot 1", message: "stuff here 1" },
        { title: "Workout Bot 2", message: "stuff here 2" },
        { title: "Workout Bot 3", message: "stuff here 3" },
      ],
      profileImg: require('../assets/bgimg.jpg'),
      workoutTime: 123,
      weeklyCals: 321,
      following: 123,
      followers: 321,
    };
  },
  methods: {
    next() {
      if (this.botIndex < (this.botMessages).length-1) this.botIndex++;
      else this.botIndex = 0;

      this.bot.title = this.botMessages[this.botIndex].title;
      this.bot.message = this.botMessages[this.botIndex].message;
    },
  },
};
</script>

<style>
</style>