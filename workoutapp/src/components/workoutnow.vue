<template>
  <div style="font-family: wkfont">
    <br />
    <h1 class="is-size-1 has-text-center"><strong>Workout Now</strong></h1>
    <br />
    <section class="is-medium" :class="{ 'is-hidden': started }">
      <p><strong>Is it workout time?</strong></p>
      <br />
      <p>Great! Just click the start button and we will record your time.</p>
      <br />
      <p>
        In the future this program will work you through a whole workout with
        steps for each exercise
      </p>
      <br />
      <button class="button" @click="startWorkout()">Start Workout</button>
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
      <button
        class="button"
        @click="
          endWorkout()
          //this.isActive = !this.isActive;
        "
      >
        End Workout
      </button>
      <div class="modal" v-bind:class="{ 'is-active': isActive }">
        <div class="modal-background"></div>
        <div class="modal-content">
          <!-- Any other Bulma elements you want -->
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" />
            </div>
          </div>

          <div class="field">
            <label class="label">Username</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input is-success"
                type="text"
                placeholder="Text input"
                value="bulma"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </div>
            <p class="help is-success">This username is available</p>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input is-danger"
                type="email"
                placeholder="Email input"
                value="hello@"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-exclamation-triangle"></i>
              </span>
            </div>
            <p class="help is-danger">This email is invalid</p>
          </div>

          <div class="field">
            <label class="label">Subject</label>
            <div class="control">
              <div class="select">
                <select>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea class="textarea" placeholder="Textarea"></textarea>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <label class="checkbox">
                <input type="checkbox" />
                I agree to the <a href="#">terms and conditions</a>
              </label>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <label class="radio">
                <input type="radio" name="question" />
                Yes
              </label>
              <label class="radio">
                <input type="radio" name="question" />
                No
              </label>
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link">Submit</button>
            </div>
            <div class="control">
              <button class="button is-link is-light">Cancel</button>
            </div>
          </div>
        </div>
        <button
          class="modal-close is-large"
          aria-label="close"
          @click="isActive = false"
        ></button>
      </div>
    </section>

    <br />
    <hr />
    <h1 class="is-size-1 has-text-center"><strong>Past Workouts</strong></h1>
    <br />

    <section class="is-large">
      <ul style="display: grid; grid-template-columns: repeat(3, 1fr)">
        <li
          v-for="workout in pastWorkouts"
          v-bind:key="workout.id"
          v-bind:value="workout.length"
          style="display: inline; padding: 20px"
        >
          <div class="card">
            <div class="card-header-title">
              <strong>{{ workout.type }}</strong>
            </div>
            <hr />
            <h1 class="is-size-2">{{ workout.score }}</h1>
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
          <br />
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
      isActive: false,
      score: 0,
      type: "core",
      running: false,
      pastWorkouts: [
        {
          length: 10,
          score: 5,
          date: new Date().toLocaleString(),
          type: "Run",
        },
        {
          length: 20,
          score: 5,
          date: new Date().toLocaleString(),
          type: "Swim",
        },
        {
          length: 30,
          score: 5,
          date: new Date().toLocaleString(),
          type: "Gym",
        },
        {
          length: 10,
          score: 5,
          date: new Date().toLocaleString(),
          type: "Run",
        },
        {
          length: 20,
          score: 5,
          date: new Date().toLocaleString(),
          type: "Swim",
        },
        {
          length: 30,
          score: 5,
          date: new Date().toLocaleString(),
          type: "Gym",
        },
      ],
    };
  },
  mounted() {
    setInterval(
      () => (this.duration = (new Date().getTime() - this.timeStart) / 1000),
      100
    );
  },
  methods: {
    startWorkout() {
      this.started = true;
      this.timeStart = new Date().getTime();
      if (this.running) {
        this.duration = new Date().getTime() - this.timeStart;
        return;
      }
      this.running = true;
    },
    endWorkout() {
      this.started = false;
      this.timeStop = new Date().getTime();
      this.duration = (this.timeStop - this.timeStart) / 1000;
      this.pastWorkouts.push({
        length: this.duration,
        score: 10,
        date: new Date().toLocaleString(),
        type: this.type,
      });
    },
  },
};
</script>

<style>
</style>