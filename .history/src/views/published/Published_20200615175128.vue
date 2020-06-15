<template>
  <div>
    <el-card class="box-card">
      <el-table :data="tableData.slice((currentPage - 1 ) * pageSize, currentPage * pageSize)" style="width: 100%">
        <!-- # -->
        <el-table-column label="#" width="100" align="center" type="index"></el-table-column>
        <!-- 标题 -->
        <el-table-column label="标题" width="350" align="center">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.title}}</span>
          </template>
        </el-table-column>
        <!-- 作者 -->
        <el-table-column label="作者" width="120" align="center">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.author}}</span>
          </template>
        </el-table-column>
        <!-- 类目 -->
        <el-table-column label="类目" width="120" align="center">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.category}}</span>
          </template>
        </el-table-column>
        <!-- 来源 -->
        <el-table-column label="来源" width="120" align="center">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.source}}</span>
          </template>
        </el-table-column>
        <!-- 重要性 -->
        <el-table-column label="重要性" width="120" align="center">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.star}}</span>
          </template>
        </el-table-column>
        <!-- 发布时间 -->
        <el-table-column label="发布时间" width="160" align="center">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.date}}</span>
          </template>
        </el-table-column>
        <!-- 操作 -->
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button size="mini" @click="tops(scope.row)" type="primary">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            <el-button size="mini" type="success" @click="handleDelete(scope.$index, scope.row)">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
       <el-pagination
          align="left"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 40]"
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
      pageSize: 10,
       currentPage: 1,
    };
  },
  methods: {
    getData() {
      axios
        .get(`/api/article/allArticle`)
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
</style>