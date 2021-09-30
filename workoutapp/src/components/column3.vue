<template>
   <!-- User Profile card -->
    <div class="has-background-link is-one-third" style="padding: 10px; border-radius: 15px;">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">John Smith</p>
              <p class="subtitle is-6">@johnsmith</p>
            </div>
          </div>

          <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a>
            <a href="#">#responsive</a>
            <br />
            <time>{{ `${now}` }}</time>
          </div>
        </div>
      </div>
      <br />
      <div class="card">
        <div class="card-content">
          <label class="label">Weekly Health</label>

          <div class="level">
            <div class="level-item">
              <span class="icon has-icons">
                <i class="fa fa-line-chart" aria-hidden="true"></i>
              </span>
            </div>
            <div class="level-item">
              <span class="icon has-icons">
                <i class="fa fa-pie-chart" aria-hidden="true"></i>
              </span>
            </div>
            <div class="level-item">
              <span class="icon has-icons">
                <i class="fa fa-meh-o" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            now:  new Date().toLocaleString()
        }
    },
    mounted() {
            setInterval(() => (this.now = new Date().toLocaleString()), 1000); // update time
    }
}
</script>

<style>

</style>