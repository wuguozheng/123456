<template>
  <div>
    <el-card class="box-card">
      <el-table :data="tableData.slice((currentPage - 1 ) * pagesize, currentPage * pagesize)" 
      style="width: 100%">
          <!-- 名称 -->
        <el-table-column label="名称" width="300">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.NAME}}</span>
          </template>
        </el-table-column>
        <!-- 商品编号 -->
        <el-table-column label="商品编号" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.GOODS_SERIAL_NUMBER}}</span>
          </template>
        </el-table-column>
        <!-- 原价 -->
        <el-table-column label="原价" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.ORI_PRICE }}</span>
          </template>
        </el-table-column>
        <!-- 现价 -->
        <el-table-column label="现价" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.PRESENT_PRICE}}</span>
          </template>
        </el-table-column>
        <!-- 操作 -->
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"><i class="iconfont icon-modify"></i>修改</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)"><i class="el-icon-delete"></i>删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="694"
        ></el-pagination>
    </el-card>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
        tableData:[],
         // 默认是第几页
        currentPage: 1,
      // 默认一页多少条
        pagesize: 10
    };
  },
  methods: {
      getData () {
          axios.get(`/api/tableData`).then(res =>{
            this.tableData=res.data.data
              console.log(res.data);
          }).catch(err =>{
              console.log(err);
          })
      }
  },
  mounted() {
      this.getData()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>