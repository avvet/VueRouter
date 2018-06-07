<template>
  <div>
    <!--<mountain></mountain>-->
    <!--<router-view></router-view>-->
    <router-view name="header"></router-view>
    <router-view name="content"></router-view>
  </div>
</template>

<script>

  export default {
    data() {
      return {

      }
    },
    name: 'App',
  }

</script>


<style>
  #app {
    /*font-family: 'Open Sans', Helvetica, Arial, sans-serif;*/
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }


</style>