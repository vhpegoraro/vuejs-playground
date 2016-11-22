<style scoped>

    #app-layout {
        margin: 20px;
    }

</style>

<template>

    <div id="app-layout">        

        <div class="container">            

            <app-navbar></app-navbar>    

            <hr/>

            <transition
                name="custom-classes-transition"
                enter-active-class="animated fadeIn">
                <router-view></router-view>
            </transition>                

        </div><!-- /.container -->

    </div> <!-- /app-home -->

</template>

<script>

    import Navbar from './Navbar.vue';

    export default {
        name: 'app-layout',
        components: {
            appNavbar: Navbar
        }
    }

</script>