<template>
  <div>
    <div class="d-f">
      <div class="top-1">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="num" label="Order-No" width="300"></el-table-column>
          <el-table-column prop="price" label="Price" width="180"></el-table-column>
          <el-table-column prop="status" label="Status"></el-table-column>
        </el-table>
      </div>
      <div class="top-2"></div>
      <div class="top-2"></div>
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
      tableData: []
    };
  },
  methods: {
    getData() {
      axios
        .get(`/api/orderData`)
        .then(res => {
          this.tableData = res.data.data;
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getData();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.top-1 {
  width: 750px;
  height: 500px;
  background: white;
  margin-top: 20px;
  box-shadow: 1px 1px 10px #ccc;
}
.top-2 {
  width: 435px;
  height: 500px;
  background: white;
  margin-top: 20px;
  margin-left: 20px;
  box-shadow: 1px 1px 10px #ccc;
}
</style>