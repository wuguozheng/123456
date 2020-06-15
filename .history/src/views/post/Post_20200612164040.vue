<template>
 <div>
     <div class="usb d-f">
          <el-button type="danger">查看</el-button>
          <el-button type="primary">发布</el-button>
     </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
    .usb {
        width: 100%;
        height: 60px;
        background: rgb(89,165,134);
        text-align: right;
    }
    .el-button {
        width: 70px;
        height: 40px;
        text-align: right;
    }
    // .el-button {
    //     width: 70px;
    //     height: 40px;
    //     position: absolute;
    //     right: 30px;
    // }
</style>