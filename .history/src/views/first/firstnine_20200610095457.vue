<template>
 <div>
    <div>期待您的下次光临</div>
    <button @click="fistnine">确认退出</button>
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
     fistnine () {
       this.$router.push('/login')
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