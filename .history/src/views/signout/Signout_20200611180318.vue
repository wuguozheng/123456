<template>
 <div>
    <div class="bett">
       <div>期待您的下次光临</div>
       <div class="yini">
         <el-button type="primary" @click="miTo">确认退出</el-button>
         </div>
     </div>
     
    
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
       miTo(){
         axios.get('/api/user/logout ').then(res=>{
           console.log(res.data);
           localStorage.removeItem('user')
         }).catch(err=>{
           console.log(err);
         })
       }
   },
   mounted() {
      this.$router.push('/login')
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
    height: 760px;
    font-size: 30px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .yini {
    margin-top: 50px;
  }
</style>