<template>
  <div>
    <div class="usb">
      <div class="pos">
          <!-- 查看按钮 -->
        <el-button type="danger">查看</el-button>
        <!-- 发布按钮 -->
        <el-button type="primary" @click="publish">发布</el-button>
      </div>
    </div>
    <div class="usb-a">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
      <!-- 文章标题 -->
        <el-form-item label="文章标题" prop="title">
          <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>
        <!-- 文章摘要 -->
        <el-form-item label="文章摘要" prop="abstract">
          <el-input v-model="ruleForm.abstract"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="d-f">
      <!-- 作者 -->
      <div>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="作者" prop="author">
            <el-input v-model="ruleForm.author"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <!-- 类目 -->
      <div>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="类目" prop="category">
            <el-select v-model="ruleForm.category" placeholder="请选择">
              <el-option label="Vue" value="Vue"></el-option>
              <el-option label="React" value="React"></el-option>
              <el-option label="Node.js" value="Node.js"></el-option>
              <el-option label="性能优化" value="性能优化"></el-option>
              <el-option label="JavaScript" value="JavaScript"></el-option>
              <el-option label="小程序" value="小程序"></el-option>
              <el-option label="工具类" value="工具类"></el-option>
              <el-option label="其他" value="其他"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <!-- 来源 -->
      <div>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="来源" prop="source">
            <el-select v-model="ruleForm.source" placeholder="请选择">
              <el-option label="原创" value="原创"></el-option>
              <el-option label="转载" value="转载"></el-option>
              <el-option label="与他人合作" value="与他人合作"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <!-- 重要性 -->
      <div>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="重要性" prop="star">
            <el-select v-model="ruleForm.star" placeholder="请选择">
              <el-option label="1" value="1"></el-option>
              <el-option label="2" value="2"></el-option>
              <el-option label="3" value="3"></el-option>
              <el-option label="4" value="4"></el-option>
              <el-option label="5" value="5"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <!-- 发布时间 -->
      <div class="time">
        <span class="times">发布时间</span>
         <el-date-picker type="datetime" placeholder="选择日期时间" size="mini" v-model="ruleForm.date"></el-date-picker>
      </div>
    </div>
    <!-- 编辑器 -->
    <div class="tp m-t3">
      <mavon-editor v-model="ruleForm.text" />
    </div>
    <!-- 发布按钮 -->
    <div class="m-t2">
      <el-button type="primary" @click="publish">发布</el-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      ruleForm: {
        title: "",
        abstract: "",
        author: "",
        category: "",
        source: "",
        star: "",
        text: "",
        date: "",
      },
        
      rules: {
        title: [
          { required: true, message: "请输入文章", trigger: "blur" },
          { min:0, max: 15, message: "长度在 0 到 15 个字符", trigger: "blur" }
        ],
        abstract: [
          { required: true, message: "请输入文章", trigger: "blur" },
          { min: 0, max: 15, message: "长度在 0 到 15 个字符", trigger: "blur" }
        ],
        author:[
          { required: true, message: "请输入作者", trigger: "blur" },
          { min: 0, max: 15, message: "长度在 0 到 15 个字符", trigger: "blur" }
        ],
        category:[
             { required: true, message: "请选择类目", trigger: "change" },
        ],
        source:[
             { required: true, message: "请选择来源", trigger: "change" },
        ],
        star:[
             { required: true, message: "请选择星数", trigger: "change" },
        ],
      }
    };
  },
  methods: {
    publish() {
      axios
        .post(`/api/article/create`, {
          title: this.ruleForm.title,
          abstract: this.ruleForm.abstract,
          author: this.ruleForm.author,
          category: this.ruleForm.category,
          source: this.ruleForm.source,
          star: this.ruleForm.star,
          text: this.ruleForm.text,
          date: this.ruleForm.date
        })
        .then(res => {
          console.log(res.data);
          if (res.data.code === 200) {
            this.$message({
              message: res.data.data,
              type: "success"
            });
            this.$router.push("/");
          } else {
            this.$message.error("不好意思,您的文章发布失败,请重新发布");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.usb {
  width: 100%;
  background: rgb(89, 165, 134);
}
.pos {
  padding: 16px;
  text-align: right;
  margin-right: 20px;
}
.usb-a {
  margin-top: 50px;
}
.time {
  display: flex;
  font-size: 13px;
  align-items: center;
  height: 40px;
}
.times {
  width: 80px;
  padding-left: 20px;
}
</style>