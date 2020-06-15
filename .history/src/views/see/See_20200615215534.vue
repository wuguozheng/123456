<template>
 <div>
     <el-button type="primary" @click="clicks">返回</el-button>
     <div>
         <h2>{{arr.title}}</h2>
         <div>摘要: {{arr.abstract}}</div>
         <div>发表于: {{arr.author}}</div>
     </div>
     <el-card class="box-card">
         <div>{{arr.text}}</div>
     </el-card>
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
         id:'',
         arr:[]
     }
   },
   methods: {
    //    查看请求
       getData(){
           axios.post(`/api/article/article`,{
               _id: this.id
           }).then(res =>{
               this.id = res.data;
               this.arr = res.data.data
           }).catch(err =>{
               console.log(err);
           })
       },
    //    返回已发布
       clicks(){
           this.$router.push("/published")
       }
   },
   mounted() {
       this.id = this.$router.query.id;
       this.getData()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>