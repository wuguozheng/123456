<template>
  <div>
    <el-card class="box-card">
      <el-table
        :data="tableData.slice((currentPage - 1 ) * pageSize, currentPage * pageSize)"
        style="width: 100%"
      >
        <!-- # -->
        <el-table-column label="#" width="100" align="center" type="index"></el-table-column>
        <!-- 标题 -->
        <el-table-column label="标题" width="350" align="center" prop="title"></el-table-column>
        <!-- 作者 -->
        <el-table-column label="作者" width="150" align="center" prop="author"></el-table-column>
        <!-- 类目 -->
        <el-table-column label="类目" width="150" align="center" prop="category">
          <template slot-scope="scope">
            <div v-if="scope.row.category==='Vue'">
               <el-tag type="success">{{ scope.row.category }}</el-tag>
            </div>
            <div v-else-if="scope.row.category==='React'">
               <el-tag type="info">{{ scope.row.category }}</el-tag>
            </div>
            <div v-else-if="scope.row.category==='Node.js'">
               <el-tag type="warning">{{ scope.row.category }}</el-tag>
            </div>
            <div v-else-if="scope.row.category==='性能优化'">
               <el-tag type="success">{{ scope.row.category }}</el-tag>
            </div>
            <div v-else-if="scope.row.category==='JavaScript'">
               <el-tag type="warning">{{ scope.row.category }}</el-tag>
            </div>
             <div v-else-if="scope.row.category==='小程序'">
               <el-tag type="danger">{{ scope.row.category }}</el-tag>
            </div>
             <div v-else-if="scope.row.category==='工具类'">
               <el-tag type="danger">{{ scope.row.category }}</el-tag>
            </div>
             <div v-else-if="scope.row.category==='其他'">
               <el-tag>{{ scope.row.category }}</el-tag>
            </div>
          </template>
        </el-table-column>
        <!-- 来源 -->
        <el-table-column label="来源" width="150" align="center" prop="source"></el-table-column>
        <!-- 重要性 -->
        <el-table-column label="重要性" width="170" align="center" prop="star">
          <template slot-scope="scope">
            <el-rate disabled text-color="#ff9900" v-model="scope.row.star"></el-rate>
           
          </template>
        </el-table-column>
        <!-- 发布时间 -->
        <el-table-column label="发布时间" width="160" align="center" prop="date"></el-table-column>
        <!-- 操作 -->
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="handleedit(scope.$index,scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="tops(scope.$index, scope.row)">删除</el-button>
            <el-button size="mini" type="success" @click="handleDeletel(scope.$index, scope.row)">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        align="left"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="5"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.lenght"
      ></el-pagination>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
import dayjs from "dayjs";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      tableData: [],
      pageSize: 5,
      currentPage: 1
    };
  },
  methods: {
    // 请求数据
    getData() {
      axios
        .get(`/api/article/allArticle`)
        .then(res => {
          res.data.data.map(item => {
            this.star = item.star * 1;
            item.data = dayjs(item.data).format("YYYY年MM月DD日HH时mm分ss秒");
          });
          this.tableData = res.data.data;
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 删除
    tops (index,row){
        axios.post(`/api/article/delete`,{
            _id:row._id
        }).then(res =>{
          if(res.data.code===200){
            this.$message({
              message:"删除成功",
              type:"success"
            });
            this.getData();
          }
        }).catch(err =>{
          this.$message.error("删除失败");
        })
    },
    // 分页
    handleSizeChange(val) {
      this.pageSize = val;
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      console.log(`当前页: ${val}`);
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
</style>