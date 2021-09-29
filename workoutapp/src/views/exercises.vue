<template>
 

<body style="background-color: rgb(247, 241, 234);">
    <div class="container">
        <!-- navbar #start -->
        <navB />
        <!-- navbar #end -->

        <!-- Page contents #start -->
        
        <!-- Page contents #end -->

        <!-- Footer #start -->
        <foot />
        <!-- Footer #end -->
    </div>
</body>


</template>

<script>
import navB from '../components/navbar.vue'
import foot from '../components/footer.vue'
export default {
    components: {
        navB,
        foot
    }
}
</script>

<style>

</style>