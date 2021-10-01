<template>
  <div class="columns is-2">
    <div class="column is-one-third">
      <section class="section is-large is-primary">
        <aside class="menu has-text-left">
          <p class="menu-label">Upper Body</p>
          <ul class="menu-list">
            <li>
              <a class="is-active" @click="show(0)">Hit The Gym</a>
              <ul :class="{ 'is-hidden': shown[0] }">
                <li><a @click="loadWorkout(1)">workout1</a></li>
                <li><a @click="loadWorkout(2)">workout1</a></li>
                <li><a @click="loadWorkout(3)">workout1</a></li>
                <li><a @click="loadWorkout(4)">workout1</a></li>
              </ul>
            </li>
            <li>
              <a class="is-active" @click="show(1)">Outdoors</a>
              <ul :class="{ 'is-hidden': shown[1] }">
                <li><a @click="loadWorkout(1)">workout1</a></li>
                <li><a @click="loadWorkout(2)">workout1</a></li>
                <li><a @click="loadWorkout(3)">workout1</a></li>
                <li><a @click="loadWorkout(4)">workout1</a></li>
              </ul>
            </li>
            <li>
              <a class="is-active" @click="show(2)">At Home</a>
              <ul :class="{ 'is-hidden': shown[2] }">
                <li><a @click="loadWorkout(1)">workout1</a></li>
                <li><a @click="loadWorkout(2)">workout1</a></li>
                <li><a @click="loadWorkout(3)">workout1</a></li>
                <li><a @click="loadWorkout(4)">workout1</a></li>
              </ul>
            </li>
          </ul>
          <p class="menu-label">Cardio</p>
          <ul class="menu-list">
            <li>
              <a class="is-active" @click="show(3)">Hit The Gym</a>
              <ul :class="{ 'is-hidden': shown[3] }">
                <li><a @click="loadWorkout(1)">Treadmill</a></li>
                <li><a @click="loadWorkout(2)">Bike</a></li>
                <li><a @click="loadWorkout(3)">Lift</a></li>
                <li><a @click="loadWorkout(4)">Swim</a></li>
              </ul>
            </li>
            <li>
              <a class="is-active" @click="show(4)">Outside</a>
              <ul :class="{ 'is-hidden': shown[4] }">
                <li><a @click="loadWorkout(1)">Run</a></li>
                <li><a @click="loadWorkout(2)">Bike</a></li>
                <li><a @click="loadWorkout(3)">Swim</a></li>
                <li><a @click="loadWorkout(4)">Other</a></li>
              </ul>
            </li>
            <li>
              <a class="is-active" @click="show(5)">At Home</a>
              <ul :class="{ 'is-hidden': shown[5] }">
                <li><a @click="loadWorkout(1)">workout1</a></li>
                <li><a @click="loadWorkout(2)">workout1</a></li>
                <li><a @click="loadWorkout(3)">workout1</a></li>
                <li><a @click="loadWorkout(4)">workout1</a></li>
              </ul>
            </li>
          </ul>
          <p class="menu-label">Core</p>
          <ul class="menu-list">
            <li>
              <a class="is-active" @click="show(6)">Hit The Gym</a>
              <ul :class="{ 'is-hidden': shown[6] }">
                <li><a @click="loadWorkout(1)">workout1</a></li>
                <li><a @click="loadWorkout(2)">workout1</a></li>
                <li><a @click="loadWorkout(3)">workout1</a></li>
                <li><a @click="loadWorkout(4)">workout1</a></li>
              </ul>
            </li>
            <li>
              <a class="is-active" @click="show(7)">In the Fresh Air</a>
              <ul :class="{ 'is-hidden': shown[7] }">
                <li><a @click="loadWorkout(1)">workout1</a></li>
                <li><a @click="loadWorkout(2)">workout1</a></li>
                <li><a @click="loadWorkout(3)">workout1</a></li>
                <li><a @click="loadWorkout(4)">workout1</a></li>
              </ul>
            </li>
            <li>
              <a class="is-active" @click="show(8)">At Home</a>
              <ul :class="{ 'is-hidden': shown[8] }">
                <li><a @click="loadWorkout(1)">workout1</a></li>
                <li><a @click="loadWorkout(2)">workout1</a></li>
                <li><a @click="loadWorkout(3)">workout1</a></li>
                <li><a @click="loadWorkout(4)">workout1</a></li>
              </ul>
            </li>
          </ul>
        </aside>
      </section>
    </div>
    <div class="column is-two-thirds">
      <section class="section is-large is-primary">
        <figure class="image is-3by1">
          <img v-bind:src="`${workoutData[workoutIndex].step1img}`" />
        </figure>
        <br />
        <hr />
        <br />
        <p class="content">{{ workoutData[workoutIndex].step1 }}</p>
        <br />
        <hr />
        <br />
        <figure class="image is-3by1">
          <img v-bind:src="`${workoutData[workoutIndex].step2img}`" />
        </figure>
        <br />
        <p class="content">{{ workoutData[workoutIndex].step2 }}</p>
        <br />
        <hr />
        <br />
        <figure class="image">
          <iframe
            class="has-ratio"
            width="640"
            height="360"
            v-bind:src="`${workoutData[workoutIndex].link}`"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </figure>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shown: [true, true, true, true, true, true, true, true, true],
      workoutIndex: 0,
      workoutData: [
        {
          step1img: "https://bulma.io/images/placeholders/720x240.png",
          step2img: "https://bulma.io/images/placeholders/720x240.png",
          link: "https://www.youtube.com/results?search_query=workoutupperbody",
          step1:
            "Incidunt natus aperiam obcaecati delectus nesciunt. Aspernatur ratione voluptatibus minima ea. Neque ex ducimus asperiores iste, dignissimos laborum aliquam impedit voluptatem quos!",
          step2:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.Doloribus blanditiis facilis maiores vitae amet adipisci inventore nam harum eaque, qui veritatis impedit m eos enim voluptatem consequatur.",
        },
        {
          step1img: "https://bulma.io/images/placeholders/720x240.png",
          step2img: "https://bulma.io/images/placeholders/720x240.png",
          link: "https://www.youtube.com/results?search_query=workoutcardio",
          step1:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt natus aperiam obcaecati delectus nesciunt. Aspernatur ratione voluptatibus minima ea. Neque ex ducimus asperiores iste, dignissimos laborum aliquam impedit voluptatem quos!",
          step2:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.Doloribus blanditiis facilis maiorelore voluptas numquam eos enim voluptatem consequatur.",
        },
        {
          step1img: "https://bulma.io/images/placeholders/720x240.png",
          step2img: "https://bulma.io/images/placeholders/720x240.png",
          link: "https://www.youtube.com/results?search_query=workoutlowerbody",
          step1:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit.  os laborum aliquam impedit voluptatem quos!",
          step2:
            "Loraiores vitae amet adipisci inventore nam harum eaque, qui veritatis impedit iste,dolore voluptas numquam eos enim voluptatem consequatur.",
        },
        {
          step1img: "https://bulma.io/images/placeholders/720x240.png",
          step2img: "https://bulma.io/images/placeholders/720x240.png",
          link: "https://www.youtube.com/results?search_query=workoutlowerbody",
          step1: "Lorem ipsum dolor, sit amet it voluptatem quos!",
          step2: "Loraiores vitae amet ad,nim voluptatem consequatur.",
        },
      ],
    };
  },
  methods: {
    show(x) {
      for (let i = 0; i < this.shown.length; i++) {
        if (i == x) {
          this.shown[i] = false;
        } else {
          this.shown[i] = true;
        }
      }
    },
    loadWorkout(workoutRequest) {
      let wR = workoutRequest - 1;
      for (let i = 0; i < 27; i++) {
        if (i == wR) {
          this.workoutIndex = wR;
          break;
        }
      }
    },
  },
};
</script>

<style>
</style>