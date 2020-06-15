<template>
  <div>
    <el-card class="box-card uplo">
        <div class="dev">支持拖拽</div>
      <el-upload
        class="upload-demo dev-1"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          将文件拖到此处，或
          <em>点击上传</em>
        </div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
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
.uplo {
    width: 100%;
    height: 800px;
}
.dev {
    text-align: left;
}
.dev-1 {
    text-align: left;
}
</style>