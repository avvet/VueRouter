<template src="./Home.html"></template>
<style src="./Home.scss" scoped lang="scss"></style>

<script>
  import {httpWrapper} from "../../http/http-wrapper";
  // import Mountain from "../mountain-component/Mountain";


  export default {
    data(){
      return{
        people:[],
        currentPage: 1,
        loadingData: false,
        animating: false
      }
    },
    name:'Home',
    components:{
      // 'mountain': Mountain
    },
    created(){


    },
    methods: {


    },
    computed: {

    }
  }
</script>

