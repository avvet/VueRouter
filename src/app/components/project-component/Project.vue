<template>
  <div>
    <mountain></mountain>
    <div class="wrapper">
      <div class="all_user_container">
        <div class="singleUser" v-if="user">
          <div class="user user_photo"></div>
          <div class="user user_info">{{user.name}} {{user.lastName}}</div>
          <div class="user user_age">{{user.age}} years old</div>
          <div class="user user_position">{{user.position}}</div>
          <div class="user user_text">{{user.info}}</div>
        </div>
      </div>
    </div>
    <footer></footer>
  </div>
</template>

<script>
  import {httpWrapper} from "../../http/http-wrapper";
  import Mountain from "../mountain-component/Mountain";

  export default {
    data(){
      return{
        usersArray:[],
        user:''
      }
    },
    name:'Project',
    components:{
      'mountain': Mountain
    },
    created(){
      httpWrapper.getUsersFromServer(this.usersArray,(users) => {
        this.usersArray = users;
        let userId = this.$route.params.id;
        this.user = this.usersArray[userId];
      })
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper{
    width: 1170px;
    margin: 0 auto;
    padding: 0;
  }
  .singleUser{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  }
  .user_photo{
    width: 600px;
    height: 400px;
    margin-top: 80px;
    background-color: lightgrey;
    margin-bottom: 40px;
  }
  .user_info{
    font-family: "Open Sans";
    font-size: 28px;
    font-weight: bold;
  }
  .user_age{
    font-family: "Playfair Display";
    font-size: 16px;
    color: darkgrey;
  }
  .user_position{
    margin-top: 10px;
    font-family: "Playfair Display";
    font-size: 18px;
    color: darkorchid;
  }
  .user_text{
    margin-top: 20px;
    width: 600px;
    font-family: "Open Sans";
    line-height: 32px;
  }
  footer{
    width: 100%;
    height: 400px;
    background-color: hotpink;
    margin-top: 90px;
  }
</style>