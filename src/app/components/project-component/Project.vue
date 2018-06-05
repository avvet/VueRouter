<template>
  <div>
    <div class="header">
      <div class="wrapper">
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/projects">Projects</router-link>

        </nav>
        <h1 class="main_title">Single User Page</h1>
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
        <div class="users" v-if="user">
          <div class="user user_photo"></div>
          <div class="user user_info">{{user.name}} {{user.lastName}}</div>
          <div class="user user_age">{{user.age}} years old</div>
          <div class="user user_position">{{user.position}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {httpWrapper} from "../../http/http-wrapper";

  export default {
    data(){
      return{
        usersArray:[],
        user:''
      }
    },
    created(){
      httpWrapper.getUsersFromServer(this.usersArray,(users) => {
        this.usersArray = users;
        this.user = this.usersArray[1];
        console.log(this.user,'USER');
      })
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    width: 100%;
    height: 760px;
    background-color: hotpink;
    .wrapper {
      width: 1170px;
      margin: 0 auto;
      padding: 0;
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
        color: whitesmoke;
        font-family: "Open Sans";
        line-height: 36px;
      }
    }
  }
</style>