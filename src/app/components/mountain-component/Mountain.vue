<template>
  <div >
    <div class="header" :style="bgColor">
      <div class="wrapper">
        <nav>

          <router-link :to="{ name: 'home', params: { color: 'white', backgroundColor:'#008B8B', title: 'HomePage', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'} }">Homepage</router-link>
          <router-link :to="{ name: 'about', params: { color: 'black', backgroundColor:'#9370DB', title: 'About Page', description: 'Color and Title set. Default Text.'} }">About</router-link>
          <router-link :to="{ name: 'projects', params: { color: '#374e89', backgroundColor:'#778899', title: 'Projects Page', description: 'No iusto vivendo eleifend his, sit an lorem everti.'} }">Projects</router-link>

        </nav>
        <h1 :style="titleStyles" :class="classList" class="main_title">{{title}}</h1>
        <div class="text">{{description}}</div>
        <button @click="goHome" class="go_home_btn">go home</button>
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
    props: {
      color: {
        type: String,
        required: false,
        default: 'orange'
      },
      backgroundColor: {
        type: String,
        required: false,
        default: 'lightblue'
      },
      customClasses: {
        type: Array,
        required: false,
        default: () => []
      },
      title: {
        type: String,
        required: false,
        default: 'YOU MUST PUT A TITLE HERE!!!'
      },
      text: {
        type: String,
        required: false,
        default: 'Default Text' // this default will not work if 'config' object is passed to route. Even if it is empty.
      },
      description: {
        type: String,
        required: false,
        default: 'Default description'
      },
      action: {
        type: String,
        required: false
      }
    },
    // created(){
    //   if(this.$route.params.name ==='home'){
    //     this.activeColor = 'lightgreen';
    //   }else if(this.$route.params.name ==='about'){
    //     this.activeColor = 'lightblue';
    //   }else {
    //     this.activeColor = 'hotpink';
    //   }
    // },
    computed:{
      titleStyles() {
        return `color: ${this.color}`
      },
      classList() {
        return this.customClasses;
      },
      bgColor() {
        return `background-color: ${this.backgroundColor}`;
      }
      // homeIsActive(){
      //   return this.activeColor = 'lightgreen';
      // },
      // aboutIsActive(){
      //   return this.activeColor = 'red';
      // },
      // projectsIsActive(){
      //   return this.activeColor = 'hotpink';
      // }
    },
    methods:{
      goHome(){
        this.$router.push({ name: 'home', params: { color: 'blue', title: 'HomePage', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'} });
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
      color: black;
      text-transform: uppercase;
      font-size: 46px;
    }
    .text{
      width: 600px;
      color: whitesmoke;
      font-family: "Open Sans";
      line-height: 36px;
    }
    .go_home_btn{
      margin-top: 60px;
      width: 150px;
      height: 45px;
      background-color: #374e89;
      color: white;
      border: none;
      font-size: 14px;
    }
  }
</style>