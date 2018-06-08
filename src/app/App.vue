<template>
  <div>
    <!--<router-view></router-view>-->
    <section class="main_body">
      <router-view :key="$route.fullPath" name="header"></router-view>
      <router-view :key="$route.fullP" name="content"></router-view>
    </section>


  </div>
</template>

<script>
  // import HeaderComponent from "Components/header-component/HeaderComponent";
  export default {
    data() {
      return {

      }
    },
    name: 'App',
    components:{
      // 'header-component':HeaderComponent
    }
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