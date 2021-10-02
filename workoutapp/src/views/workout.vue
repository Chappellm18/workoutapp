<template>

    <div class="container" style="background-color: rgb(247, 241, 234);">
        
        <!-- navbar #start -->
        <navB />
        <!-- navbar #end -->
        <br>
        <br>
        <!-- Page contents #start -->
        <workoutnow />
        <!-- Page contents #end -->
        <br>
        <br>
        <!-- Footer #start -->
        <foot />
        <!-- Footer #end -->
    </div>


</template>

<script>
import navB from '../components/navbar.vue'
import foot from '../components/footer.vue'
import workoutnow from '../components/workoutnow.vue'
export default {
    components: {
        navB,
        foot,
        workoutnow
    }
}
</script>

<style>

</style>