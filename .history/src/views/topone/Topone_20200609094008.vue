<template>
 <div>
    <div class="map">
        <img src="./2ljdp42vefm.gif" alt=""  style="position:absolute;z-index:-1;width:100%;height:100%;top:0px;left:0px;">

        <el-card class="item">
        <div slot="header" class="clearfix">
          <span class="help">欢迎来到峡谷之巅</span>
        </div>
        <div>
             <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="请输入用户名" prop="username">
              <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>

            <el-form-item label="密码" prop="password">
              <el-input v-model="ruleForm.password" show-password></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="register(ruleForm)">注册</el-button>
              <el-button @click="login">登录</el-button>

            </el-form-item>
          </el-form>
        </div>
      </el-card>
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
    //    let validatePass = (rule, value, callback) => {
    //   if (value === "") {
    //     callback(new Error("请再次输入密码"));
    //   } else if (value !== this.ruleForm.password) {
    //     callback(new Error("两次输入密码不一致!"));
    //   } else {
    //     callback();
    //   }
    // };
     return {
          ruleForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur"
          },
          {
            min: 2,
            max: 10,
            message: "用户名在2-10位之间",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          },
          {
            min: 6,
            max: 15,
            message: "密码在6-15位之间",
            trigger: "blur"
          }
        ],
      }
     }
   },
   methods: {
     register() {
       axios.post(`/api/user/register`,{
        username:this.ruleForm.username,
        password:this.ruleForm.password
       }).then(res => {
         if(res.data.code===200){
           this.$message({
             message:res.data.message,
             type:"success"(注册成功)
           });
            // this.$router.push("/Login");
         }else {
            this.$message({
             message:res.data.message,
             type:"error"(注册失败)
           });
         }
       }).catch(err =>{
         console.log(err);
       })
     },
    //   // login() {
    //   // this.$router.push("/Login");
    // }
    //    login() {
    //   this.$refs.ruleForm.validate(valid => {
    //     if (valid) {
    //       this.$message.success("注册成功"),
    //        this.$router.push("/");
    //     } else {
    //       this.$message.error("注册失败,请检查");
    //       return false;
    //     }
    //   });
    // },
    // resetForm(formName) {
    //   this.$refs[formName].resetFields();
    // }
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
.item {
  width: 550px;
  height: 350px;
  position: absolute;
  left: 500px;
  top: 200px;
  background: rgba(255,255,255,0.1);
}
.help {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>