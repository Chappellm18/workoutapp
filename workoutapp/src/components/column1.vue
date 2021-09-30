<template>
  <!-- Past activity Figure out how to fill a table with data -->
  <div
    class="has-background-primary is-one-third"
    style="padding: 10px; border-radius: 15px"
  >
    <div class="table">
      <table class="table">
        <thead>
          <tr>
            <th><abbr title="Date">Date</abbr></th>
            <th>Type</th>
            <th><abbr title="Time">Time</abbr></th>
            <th><abbr title="Score">Score</abbr></th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th><abbr title="Date">Date</abbr></th>
            <th>Type</th>
            <th><abbr title="Time">Time</abbr></th>
            <th><abbr title="Score">Score</abbr></th>
          </tr>
        </tfoot>
        <tbody>
          <tr>
            <th>{{ `${now}` }}</th>
            <td>Swim</td>
            <td>{{ `${now}` }}</td>
            <td>5</td>
          </tr>
          <tr>
            <th>{{ `${now}` }}</th>
            <td>Lift</td>
            <td>{{ `${now}` }}</td>
            <td>6</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notificationsHub: [
        { welcome: "Noti", message: "bruh" },
        { welcome: "fasdasdy", message: "bruhbruh" },
        { welcome: "sadasme", message: "bruhbruhbruh" },
      ],
      now: new Date().toLocaleString(), // time
      visible: true,
    };
  },
  mounted() {
    setInterval(() => (this.now = new Date().toLocaleString()), 1000); // update time
  },
  methods: {
    close() {
      this.visible = false; // set visible to false to close element
    },
  },
};
</script>

<style>
</style>