<template>
 
<body style="background-color: rgb(247, 241, 234);">

    <div class="container">

        <!-- navbar #start -->
        <navB />
        <!-- navbar #end -->

        <!-- Page content #start -->
        <br>
        
        <homecon />

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
        foot
    }
}
</script>

<style>

</style>