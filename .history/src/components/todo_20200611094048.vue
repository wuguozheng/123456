<template>
  <div>
    <!-- 第一个 -->
    <div class="d-f">
      <div class="top-1">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="num" label="Order-No" width="300"></el-table-column>
          <el-table-column prop="price" label="Price" width="250"></el-table-column>
          <el-table-column prop="status" label="Status">

            <template slot-scope="scope">
              <div v-if="scope.row.status===0">
                <el-tag type="danger">pending</el-tag>
              </div>
              <div v-if="scope.row.status===1">
                <el-tag type="success">success</el-tag>
              </div>
            </template>

          </el-table-column>
        </el-table>
      </div>
      <!-- 第二个 -->
      <div class="top-2"></div>
      <!-- 第三个 -->
      <div class="top-2">

      </div>
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
      // 第一个的定义
      tableData: []
    };
  },
  methods: {
    // 第一个的请求
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
    },
    // 第三个请求
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
     // 第一个的请求
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