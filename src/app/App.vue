<template>

  <div id="app">
    
    <transition
        name="custom-classes-transition"
        enter-active-class="animated fadeIn">
        <router-view></router-view>
    </transition>    

  </div>

</template>

<script>

  export default {
    name: 'app'
  }

</script>
