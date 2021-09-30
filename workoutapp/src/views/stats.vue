<template>
  <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <link rel="stylesheet" href="../font-awesome-4.7.0/css/font-awesome.min.css">
    <title>Hub</title>
</head>

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

</html>
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