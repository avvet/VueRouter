<template>
  <div>
    <div class="wrapper">
      <h1 class="main_title">About Page</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </nav>
      <div class="green_square">{{message}}</div>
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
    .main_title{

    }
  }
</style>