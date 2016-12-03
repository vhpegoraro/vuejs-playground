<template>

  <div id="app">
    
    <transition appear enter-active-class="animated fadeIn" mode="out-in">
        <router-view></router-view>
    </transition>    

  </div>

</template>

<script>

  export default {
    name: 'app'
  }

</script>
