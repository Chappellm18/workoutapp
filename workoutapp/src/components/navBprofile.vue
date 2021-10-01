<template>
  <div class="buttons">
              <a class="button is-primary">
                <figure class="image is-128x128">
                  <img class="is-rounded" src="{{ `${profile.img}` }}" alt="{{ `${profile.title}` }}"> <!-- Profile picture when logged in. Maybe make it its own component -->
                </figure> 
              </a>
            </div>
</template>

<script>
export default {
    data() {
        return {
            profile: [{
                img: require('../assets/logo.jpg'), 
                title: 'Profile Picture'
            }]
        }
    }
}
</script>

<style>

</style>