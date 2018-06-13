<template>
  <div >
    <div class="header" :style="bgColor">
        <div class="icon_bar" @click="menuToggle">
          <i class="fa fa-bars"></i>
        </div>
        <nav v-show="closeIcon">
          <div class="icon_cross" @click="menuToggle">
            <i class="fa fa-close"></i>
          </div>
          <div class="menu_link" @click="navTo('home')">Homepage</div>
          <div class="menu_link" @click="navTo('about')">About</div>
          <div class="menu_link" @click="onToggleProjectsLinks">Projects</div>
          <div class="dropdown" v-if="isProjectsLinksVisible">
            <div class="menu_link" @click="navTo('projects')">all projects</div>
            <div class="single_user" v-for="(user,index) in usersArray" :key="user.id"  @click="navigateToUser(user.id)">
              <div class="user user_info" >{{user.name}} {{user.lastName}}</div>
            </div>
          </div>
        </nav>
        <div class="wrapper">
          <div class="header_content_container">
            <h1 :style="titleStyles" class="main_title">{{title}}</h1>
            <div class="text">{{description}}</div>
            <button @click="goHome" class="go_home_btn">go home</button>
          </div>
        </div>

    </div>
  </div>
</template>

<script>
  import {httpWrapper} from "../../http/http-wrapper";

  const HOME_PAGE = 'home';
  const ABOUT_PAGE = 'about';
  const PROJECTS_PAGE = 'projects';
  const PROJECT_PAGE = 'user';

  export default {
    data(){
      return{
        id: this.$route.params.id,
        usersArray:[],
        user:'',
        closeIcon: false,
        isProjectsLinksVisible: false,
        backgroundColor: 'lightblue',
        title: 'YOU MUST PUT A TITLE HERE!!!',
        description: 'Default description',
        homePageHeaderParams: { color: 'white', backgroundColor:'#008B8B', title: 'HomePage', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
        aboutPageHeaderParams: { color: 'black', backgroundColor:'#9370DB', title: 'About Page', description: 'Color and Title set. Default Text.'},
        projectsPageHeaderParams: { color: '#374e89', backgroundColor:'#778899', title: 'Projects Page', description: 'No iusto vivendo eleifend his, sit an lorem everti.'},
        projectPageHeaderParams: { color: 'purple', backgroundColor:'#5DADE2', title: 'Single User Page', description: 'No iusto vivendo eleifend his, sit an lorem everti.'}
      }
    },

    name:'HeaderComponent',
    created() {
      let routeName = this.$route.name;
      console.warn(routeName, 'PARAMS');
      this.setHeaderParams();
      this.getNewUser();

    },
    computed:{
      titleStyles() {
        return `color: ${this.color}`
      },
      bgColor() {
        return `background-color: ${this.backgroundColor}`;
      }

    },
    methods:{
      getNewUser(){
        httpWrapper.getUsersFromServer(this.usersArray,(users) => {
          this.usersArray = users;
        })
      },
      goHome(){
        this.$router.push({ name: 'home', params: { color: 'blue', title: 'HomePage', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'} });
      },
      navTo(routeName) {
        this.$router.push({name:routeName})
      },
      navigateToUser(userId) {
        this.$router.push({name:'user', params:{id: userId}});
      },
      onToggleProjectsLinks() {
        console.log(this.isProjectsLinksVisible);
        this.isProjectsLinksVisible = !this.isProjectsLinksVisible;
      },
      menuToggle(){
         this.closeIcon =! this.closeIcon;
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
    height: 100vh;
    .icon_bar{
      position: fixed;
      font-size: 20px;
      color: white;
      top: 2%;
      left: 2%;
    }
    nav {
      position: fixed;
      display: flex;
      text-transform: uppercase;
      flex-wrap: nowrap;
      flex-direction: column;
      width: 20%;
      height: 100vh;
      background-color: black;
      .icon_cross{
        color: white;
        align-self: flex-start;
        margin-left: 10%;
        margin-top: 7%;
        cursor: pointer;
        transition: all .2s;
        &:hover{
          color: grey;
        }
        .fa-close{
          font-size: 20px;
        }
      }
      .menu_link {
        font-family: "Open Sans";
        margin-top: 60px;
        text-decoration: none;
        margin-left: 40px;
        color: whitesmoke;
        position: relative;
        cursor: pointer;
        &:hover {
          color: grey;
        }
      }
      a {
        font-family: "Open Sans";
        margin-top: 60px;
        text-decoration: none;
        margin-left: 40px;
        color: whitesmoke;
        position: relative;
        &:hover {
          color: grey;
        }
      }
      .router-link-exact-active{
        color: grey;
      }
    }
    .header_content_container{
      display: flex;
      flex-direction: column;

      h1 {
        margin-top: 25%;
        font-family: "Open Sans";
        color: black;
        text-transform: uppercase;
        font-size: 46px;
      }
      .text{
        width: 600px;
        color: whitesmoke;
        font-family: "Open Sans";
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
        &:hover{
          background-color: #212F3C;
        }
      }
    }
    .dropdown{
      margin-top: 10px;
      /*visibility: hidden;*/
      /*opacity:0;*/
      transition: .2s;
    }
    .single_user{
      text-transform: none;
      margin: 0;
      padding: 0;
      height: 45px;
      color: #ffffff;
      a{
        font-size: 14px;
        margin-top: 0;
        padding: 0;
      }
    }
    /*nav a:hover .dropdown{*/
      /*visibility: visible;*/
      /*opacity:1;*/
    /*}*/
  }
</style>