<template>
  <div>
    <div class="header">
      <div class="wrapper">
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/projects">Projects</router-link>
          <router-link to="/project">Project</router-link>
        </nav>
        <h1 class="main_title">Projects Page</h1>
        <div class="text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
          galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting.
        </div>
      </div>
    </div>
    <div class="wrapper">
      <div class="all_user_container">
          <div class="users" v-for="user in usersArray">
            <div class="user user_photo"></div>
            <div class="user user_info">{{user.name}} {{user.lastName}}</div>
            <div class="user user_age">{{user.age}} years old</div>
            <div class="user user_position">{{user.position}}</div>
          </div>
      </div>
    </div>
    <footer></footer>
  </div>
</template>

<script>
  import {httpWrapper} from "../../http/http-wrapper";

  export default {
    data(){
      return{
        message:'Hello, World',
        usersArray:[],
        user:''
      }
    },
    created(){
      httpWrapper.getUsersFromServer(this.usersArray,(users) => {
        this.usersArray = users;
      })
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    width: 1170px;
    margin: 0 auto;
    padding: 0;
  }
  .header {
    width: 100%;
    height: 760px;
    background-color: mediumpurple;
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
      color: lightgrey;
      font-family: "Open Sans";
      line-height: 36px;
    }
  }
  .all_user_container{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .users{
      margin-top: 80px;
      flex-basis: 262px;
      /*float: left;*/
      .user_photo{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: lightgrey;
        margin-bottom: 40px;
      }
      .user_info{
        font-family: "Open Sans";
        font-size: 18px;
      }
      .user_age{
        font-family: "Playfair Display";
        font-size: 14px;
        color: darkgrey;
      }
      .user_position{
        margin-top: 10px;
        font-family: "Playfair Display";
        font-size: 14px;
        color: darkorchid;
      }
    }
  }
  footer{
    width: 100%;
    height: 400px;
    background-color: mediumpurple;
    margin-top: 90px;
  }
</style>