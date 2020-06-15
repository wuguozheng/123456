<template>
 <div>
    <div class="bett">
       <div>期待您的下次光临</div>
     
     <div><button @click="miTo">确定退出</button></div>
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
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>