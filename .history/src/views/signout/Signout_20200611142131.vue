<template>
 <div>
    <div class="bett">
       <div>期待您的下次光临</div>
     </div>
     <div><el-button type="primary" @click="miTo">确认退出</el-button></div>
    
 </div>
</template>

<script>
import axios from 'axios'
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
       miTo () {
           this.$router.puth('/login')
       }
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
  .bett {
    width: 100%;
    height: 770px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 30px;
  }
</style>