<template src="./Home.html"></template>
<style src="./Home.scss" scoped lang="scss"></style>

<script>
  import {httpWrapper} from "../../http/http-wrapper";
  // import todoItem from "./todo-item/todoItem";


  export default {
    data(){
      return{
        people:[],
        currentPage: 1,
        loadingData: false,
        animating: false
      }
    },
    components:{
      // 'todo-item': todoItem
    },
    created(){


    },
    methods: {


    },
    computed: {

    }
  }
</script>

