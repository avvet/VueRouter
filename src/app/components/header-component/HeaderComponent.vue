<template>
  <div >
    <div class="header" :style="bgColor">
      <div class="wrapper">
        <nav>

          <router-link :to="{ name: 'home'}">Homepage</router-link>
          <router-link :to="{ name: 'about'}">About</router-link>
          <router-link :to="{ name: 'projects'}">Projects</router-link>

        </nav>
        <h1 :style="titleStyles" :class="classList" class="main_title">{{title}}</h1>
        <div class="text">{{description}}</div>
        <button @click="goHome" class="go_home_btn">go home</button>
      </div>
    </div>
  </div>
</template>

<script>

  const HOME_PAGE = 'home';
  const ABOUT_PAGE = 'about';
  const PROJECTS_PAGE = 'projects';
  const PROJECT_PAGE = 'user';

  export default {
    data(){
      return{
        // name: this.$route.params.name
        backgroundColor: 'lightblue',
        // color: 'orange',
        title: 'YOU MUST PUT A TITLE HERE!!!',
        // test: 'Default Text',
        description: 'Default description',
        homePageHeaderParams: { color: 'white', backgroundColor:'#008B8B', title: 'HomePage', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
        aboutPageHeaderParams: { color: 'black', backgroundColor:'#9370DB', title: 'About Page', description: 'Color and Title set. Default Text.'},
        projectsPageHeaderParams: { color: '#374e89', backgroundColor:'#778899', title: 'Projects Page', description: 'No iusto vivendo eleifend his, sit an lorem everti.'},
        projectPageHeaderParams: { color: 'purple', backgroundColor:'#5DADE2', title: 'Single User Page', description: 'No iusto vivendo eleifend his, sit an lorem everti.'}
      }
    },

    name:'HeaderComponent',
    // props: {
    //   color: {
    //     type: String,
    //     required: false,
    //     default: 'orange'
    //   },
    //   backgroundColor: {
    //     type: String,
    //     required: false,
    //     default: 'lightblue'
    //   },
    //   customClasses: {
    //     type: Array,
    //     required: false,
    //     // default: () => []
    //   },
    //   title: {
    //     type: String,
    //     required: false,
    //     default: 'YOU MUST PUT A TITLE HERE!!!'
    //   },
    //   text: {
    //     type: String,
    //     required: false,
    //     default: 'Default Text' // this default will not work if 'config' object is passed to route. Even if it is empty.
    //   },
    //   description: {
    //     type: String,
    //     required: false,
    //     default: 'Default description'
    //   }
    // },
    watch:{
      // $route (to, from){
      //   console.log(this.$route.params, '////', this.$route);
      //   this.setHeaderParams();
      // }
    },
    created() {
      let routeName = this.$route.name;
      console.warn(routeName, 'PARAMS');
      this.setHeaderParams();


    },
    computed:{
      titleStyles() {
        return `color: ${this.color}`
      },
      classList() {
        return this.customClasses;
      },
      bgColor() {
        return `background-color: ${this.backgroundColor}`;
      },

    },
    methods:{
      goHome(){
        this.$router.push({ name: 'home', params: { color: 'blue', title: 'HomePage', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'} });
      },
      setHeaderParams() {
        let routeName = this.$route.name;
        switch (routeName) {
          case HOME_PAGE:
            this.setHomeHeaderParams();
            break;
          case ABOUT_PAGE:
            this.setAboutHeaderParams();
            break;
          case PROJECTS_PAGE:
            this.setProjectsHeaderParams();
            break;
          case PROJECT_PAGE:
            this.setProjectHeaderParams();
            break;
        }
      },
      programHeaderParams() {
        let routeName = this.$route.name + 'PageHeaderParams';
        console.log(routeName, 'routeName');
      },
      setHomeHeaderParams() {
        this.backgroundColor = this.homePageHeaderParams.backgroundColor;
        this.color = this.homePageHeaderParams.color;
        this.title = this.homePageHeaderParams.title;
        this.description = this.homePageHeaderParams.description;
      },
      setAboutHeaderParams() {
        this.backgroundColor = this.aboutPageHeaderParams.backgroundColor;
        this.color = this.aboutPageHeaderParams.color;
        this.title = this.aboutPageHeaderParams.title;
        this.description = this.aboutPageHeaderParams.description;
      },
      setProjectsHeaderParams() {
        this.backgroundColor = this.projectsPageHeaderParams.backgroundColor;
        this.color = this.projectsPageHeaderParams.color;
        this.title = this.projectsPageHeaderParams.title;
        this.description = this.projectsPageHeaderParams.description;
      },
      setProjectHeaderParams() {
        this.backgroundColor = this.projectPageHeaderParams.backgroundColor;
        this.color = this.projectPageHeaderParams.color;
        this.title = this.projectPageHeaderParams.title;
        this.description = this.projectPageHeaderParams.description;
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
      background-color: #34495E;
      color: white;
      border: none;
      font-size: 14px;
      cursor: pointer;
      transition: all .2s;
      line-height: 45px;
      &:hover{
        background-color: #212F3C;
      }
    }
  }
</style>