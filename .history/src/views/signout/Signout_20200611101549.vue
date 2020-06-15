<template>
 <div>
   5259226
     <div>期待您的下次光临</div>
     <div><button @click="miTo">确定退出</button></div>
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

</style>