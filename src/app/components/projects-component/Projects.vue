<template>
  <div>
    <div class="wrapper">
      <div class="all_user_container">
          <div class="users" v-for="(user,index) in usersArray">
            <router-link :to="{name:'user', params:{id:user.id, color: 'blue', title: 'HomePage', description: 'Lorem Ipsum is simply dummy text.'}}">
              <div class="user user_photo"></div>
              <div class="user user_info">{{user.name}} {{user.lastName}} </div>
            </router-link>
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
    name:'Projects',
    components:{
      // 'header-component':HeaderComponent
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
  .all_user_container{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .users{
      margin-top: 80px;
      flex-basis: 262px;
      .user_photo{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: lightgrey;
        margin-bottom: 40px;
      }
      a{
        text-decoration: none;
        .user_info{
          color: black;
          font-family: "Open Sans";
          font-size: 18px;
          font-weight: bold;
        }
      }
      .user_age{
        margin-top: 5px;
        font-family: "Playfair Display";
        font-size: 14px;
        color: darkgrey;
      }
      .user_position{
        margin-top: 15px;
        font-family: "Playfair Display";
        font-size: 16px;
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