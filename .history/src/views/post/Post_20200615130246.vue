<template>
  <div>
    <div class="usb">
      <div class="pos">
        <el-button type="danger">查看</el-button>
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
        <el-form-item label="文章标题" prop="title">
          <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>
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
      
      <div class="d-f a-i-c">
        <div class="gun">来源</div>
        <el-select v-model="ruleForm.source" placeholder="请选择" class="ipt">
          <el-option v-for="item in two" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </div>
      <div class="d-f a-i-c">
        <div class="gun">重要性</div>
        <el-select v-model="ruleForm.star" placeholder="请选择" class="ipt">
          <el-option
            v-for="item in three"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="d-f a-i-c">
        <div class="gun">发布时间</div>
        <div class="ipt">
          <el-time-select
            v-model="ruleForm.date"
            :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30',
              }"
            placeholder="选择日期时间"
          ></el-time-select>
        </div>
      </div>
    </div>
    <div class="tp m-t3">
      <mavon-editor v-model="ruleForm.text" />
    </div>
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
        date: ""
      },
      rules: {
        title: [
          { required: true, message: "请输入文章", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        abstract: [
          { required: true, message: "请输入文章", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
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
.ipt {
  width: 200px;
  height: 40px;
  margin-left: 20px;
}
.gun {
  margin-left: 50px;
}
</style>