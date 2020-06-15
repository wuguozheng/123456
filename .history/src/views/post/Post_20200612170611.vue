<template>
 <div>
     <div class="usb d-f a-i-c">
         <div class="pos">
   <el-button type="danger">查看</el-button>
          <el-button type="primary">发布</el-button>
         </div>
       
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
        height: 70px;
        background: rgb(89,165,134);
        position: relative;
   
    }
    .el-button {
        width: 70px;
        height: 50px;
    }
    .pos{
        position: absolute;
        right: 0;
    }
</style>