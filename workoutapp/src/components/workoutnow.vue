<template>
  <div>
    <br />
    <h1 class="is-size-1 has-text-center"><strong>Workout Now</strong></h1>
    <br />
    <section class="is-medium" :class="{ 'is-hidden': started }">
      <p><strong>Is it workout time?</strong></p>
      <br />
      <p>
        Great! Just click the start button and we will
        record your time.
      </p>
      <br>
      <p>
        In the future this program will work you through a whole workout with
        steps for each exercise
      </p>
      <br />
      <button class="button is-link" @click="startWorkout()">
        Start Workout
      </button>
    </section>
    <section class="is-medium" :class="{ 'is-hidden': !started }">
      <p><strong>Workout in progress!</strong></p>
      <br />
      <p>You have been working out for</p>
      {{ duration }}
      <p>
        In the future this program will work you through a whole workout with
        steps for each exercise
      </p>
      <br />
      <button class="button is-link" @click="endWorkout()">End Workout</button>
    </section>
    
    <br />
    <hr>
    <h1 class="is-size-1 has-text-center"><strong>Past Workouts</strong></h1>
    <br />

    <section class="is-large">
      <ul style="display: grid;grid-template-columns:repeat(3,1fr);">
        <li
          v-for="workout in pastWorkouts"
          v-bind:key="workout.id"
          v-bind:value="workout.length"
          style="display: inline; padding: 20px;"
        >
          <div class="card">
            <div class="card-header-title">
              <strong>{{ workout.type }}</strong>
            </div>
            <hr />
            <h1 class="is-size-2">{{workout.score}}</h1>
            <div class="card-content">
              <div class="level">
                
                <div class="level-item">
                  {{ workout.date }}
                </div>
                <div class="level-item">
                  {{ workout.length }}
                </div>
              </div>
              <footer class="card-footer">
                <p class="card-footer-item">
                  <span>
                    Share on <a href="https://twitter.com/">Twitter</a>
                  </span>
                </p>
                <p class="card-footer-item">
                  <span> Share on <a href="#">Get Fit</a> </span>
                </p>
              </footer>
            </div>
          </div>
          <br>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      started: false,
      timeStart: null,
      timeStop: null,
      duration: 0,
      score: 0,
      type: 'core',
      running: false,
      pastWorkouts: [
        { length: 10, score: 5, date: new Date().toLocaleString(), type: "Run" },
        { length: 20, score: 5, date: new Date().toLocaleString(), type: "Swim" },
        { length: 30, score: 5, date: new Date().toLocaleString(), type: "Gym" },
        { length: 10, score: 5, date: new Date().toLocaleString(), type: "Run" },
        { length: 20, score: 5, date: new Date().toLocaleString(), type: "Swim" },
        { length: 30, score: 5, date: new Date().toLocaleString(), type: "Gym" },
      ],
    };
  },
  methods: {
    startWorkout() {
      this.started = true;
      this.timeStart = new Date().getTime();
      if (this.running) {
        this.duration = ((new Date().getTime()) - this.timeStart);
        return;
      } 
      this.running = true;

      
    },
    endWorkout() {
      this.started = false;
      this.timeStop = new Date().getTime();
      this.duration = (this.timeStop - this.timeStart)/1000;
      this.pastWorkouts.push({ length: this.duration, score: 10, date: new Date().toLocaleString(), type: this.type})
    },
  },
};
</script>

<style>
</style>