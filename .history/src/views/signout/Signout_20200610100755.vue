<template>
 <div>
     <div>期待您的下次光临</div>
     <div><button @click="mito">确定退出</button></div>
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
       mito () {
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