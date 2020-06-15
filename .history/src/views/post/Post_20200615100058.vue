<template>
  <div>
    <div class="usb">
      <div class="pos">
        <el-button type="danger">查看</el-button>
        <el-button type="primary">发布</el-button>
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
        <el-form-item label="文章标题" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
      </el-form>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="文章摘要" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="d-f">
      <div class="d-f a-i-c">
        <div class="gun">作者</div>
        <el-input v-model="input" class="ipt"></el-input>
      </div>
      <div class="d-f">
       <div>
            <div>类目</div>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      ruleForm: {
        name: ""
      }
    };
  },
  methods: {},
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