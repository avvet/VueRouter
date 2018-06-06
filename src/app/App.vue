<template>
  <div>
    <router-view></router-view>
    <!--<image-container></image-container>-->
    <!--<animated-list></animated-list>-->
  </div>
</template>

<script>
  import Mountain from "Components/mountain-component/Mountain";
  import Home from "Components/home-component/Home";
  import About from "Components/about-component/About";
  import Projects from "Components/projects-component/Projects";
  import Project from "Components/project-component/Project";

  export default {
    data() {
      return {

      }
    },
    name: 'App',
    components: {
      'mountain': Mountain,
      'home': Home,
      'about': About,
      'projects': Projects,
      'project': Project
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