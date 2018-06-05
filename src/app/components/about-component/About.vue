<template>
  <div>
    <div class="wrapper">
      <h1 class="main_title">About Page</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </nav>
      <div class="square green_square">{{message}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        message:'Hello, World'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper{
    width: 1170px;
    margin: 0 auto;
    padding: 0;
    h1{
      text-align: center;
    }
    nav{
      display: flex;
      text-transform: uppercase;
      flex-wrap: nowrap;
      justify-content: center;
      margin-top: 60px;
      a{
        text-decoration: none;
        margin: 0 20px 0 20px;
        color: darkblue;
        &:hover{
          color: cornflowerblue;
        }
      }
    }
    .square{
      width: 800px;
      height: 200px;
      background-color: hotpink;
      margin: 0 auto;
      margin-top: 80px;
    }
  }
</style>