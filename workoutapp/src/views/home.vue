<template>
 
<body style="background-color: rgb(247, 241, 234);">

    <div class="container">

        <!-- navbar #start -->
        <navB />
        <!-- navbar #end -->

        <!-- Page content #start -->
        
        <hr>
        <br>
        <br>
        
        <homecon />


        <br>
        <hr>
        <br>

        <workoutMonthly />

        <br>
        <hr>
        <br>
        
        <social />

        <br>
        <br>
        <br>
        <!-- Page content #end -->

        <!-- Footer #start -->
        <foot />
        <!-- Footer #end -->

    </div>

</body>


</template>

<script>
import homecon from '../components/homecontent.vue'
import navB from '../components/navbar.vue'
import foot from '../components/footer.vue'
import social from '../components/social.vue'
import workoutMonthly from '../components/workoutMonthly.vue'
export default {
    data() {
        return {
            counter: 3,
            now: new Date().toLocaleString(),
            visible: true,
            navBarIsActive: false,
        }
    },
    mounted() {
        setInterval(() => this.now = new Date().toLocaleString(), 1000)
    },
    methods: {
        grow() {
            this.counter += 10;
        },
        close() {
            this.visible = false;
        }
    },
    components: {
        navB,
        homecon,
        foot,
        social,
        workoutMonthly
    }
}
</script>

<style>

</style>