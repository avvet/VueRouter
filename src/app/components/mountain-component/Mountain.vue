<template>
  <div >
    <div class="header" v-bind:style="{backgroundColor:activeColor}">
      <div class="wrapper">
        <nav>
          <!--<router-link to="{name:'home', params:{title:true}" >Home</router-link>-->
          <!--<router-link to="{name:'about', params:{title:true}">About</router-link>-->
          <!--<router-link to="{name:'projects', params:{title:true}">Projects</router-link>-->

          <router-link @click="homeIsActive" to="/Home">Home</router-link>
          <router-link @click="aboutIsActive" to="/about/About">About</router-link>
          <router-link @click="projectsIsActive" to="/projects/Projects">Projects</router-link>

          <!--<router-link to="/about/Home">Home</router-link>-->
          <!--<router-link to="/about/About">About</router-link>-->
          <!--<router-link to="/projects/Projects">Projects</router-link>-->

        </nav>
        <h1 class="main_title">{{this.$route.params.title}}</h1>
        <div class="text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
          galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting.
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data(){
      return{
        headerTitle: '',
        activeColor:''
      }
    },
    name:'Mountain',
    created(){
      // if(this.$route.params.title==='Home'){
      //   // this.headerTitle = 'Homepage';
      //   this.activeColor = 'lightgreen';
      // }else if(this.$route.params.title==='About'){
      //   this.activeColor = 'lightblue';
      // }else if(this.$route.params.title==='Projects'){
      //   this.activeColor = 'hotpink';
      // }
    },
    computed:{
      homeIsActive(){
        return this.activeColor = 'lightgreen';
      },
      aboutIsActive(){
        return this.activeColor = 'red';
      },
      projectsIsActive(){
        return this.activeColor = 'hotpink';
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper{
    width: 1170px;
    margin: 0 auto;
    padding: 0;
  }
  .header {
    width: 100%;
    height: 760px;
    /*background-color: hotpink;*/
    nav {
      display: flex;
      text-transform: uppercase;
      flex-wrap: nowrap;
      justify-content: center;
      padding-top: 40px;
      a {
        text-decoration: none;
        margin: 0 20px 0 20px;
        color: whitesmoke;
        &:hover {
          color: lightgrey;
        }
      }
      .router-link-exact-active{
        color: indigo;
      }
    }
    h1 {
      margin-top: 120px;
      font-family: "Open Sans";
      color: white;
      text-transform: uppercase;
      font-size: 46px;
    }
    .text{
      width: 600px;
      color: whitesmoke;
      font-family: "Open Sans";
      line-height: 36px;
    }
  }
</style>