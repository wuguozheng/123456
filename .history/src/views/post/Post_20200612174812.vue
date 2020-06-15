<template>
  <div>
    <el-card class="box-card">
      <div class="usb d-f a-i-c">
        <div class="pos">
          <el-button type="danger">查看</el-button>
          <el-button type="primary">发布</el-button>
        </div>
      </div>
      <!-- <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="活动名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
      </el-form> -->
    </el-card>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
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
  height: 60px;
  background: rgb(89, 165, 134);
  position: relative;
}
.el-button {
  width: 70px;
  height: 40px;
}
.pos {
  position: absolute;
  right: 50px;
}
</style>