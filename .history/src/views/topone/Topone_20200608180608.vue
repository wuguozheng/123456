<template>
 <div>
    <div class="map">
        <img src="./2ljdp42vefm.gif" alt=""  style="position:absolute;z-index:-1;width:100%;height:100%;top:0px;left:0px;">

        <el-card class="item">
        <div slot="header" class="clearfix">
          <span>欢迎来到卢本伟广场</span>
        </div>
        <div>
             <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="账号" prop="username">
              <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>

            <el-form-item label="密码" prop="password">
              <el-input v-model="ruleForm.password" show-password></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="login">登录</el-button>
              <el-button @click="resetForm('ruleForm')">注册</el-button>

            </el-form-item>
          </el-form>
        </div>
      </el-card>
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
       login() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.$message.success("登录成功"), this.$router.push("/");
        } else {
          this.$message.error("登陆失败,请检查");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
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
.item {
  width: 550px;
  height: 350px;
  position: absolute;
  left: 500px;
  top: 200px;
  background: rgba(255,255,255,0.1);
}
</style>