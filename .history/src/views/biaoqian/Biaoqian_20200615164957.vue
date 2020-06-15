<template>
  <div>
      <div class="pdd">
           <el-tabs type="border-card">
        <!-- 全部已读 -->
      <el-tab-pane label="one">
          <div v-for="(item,index) in arr" :key="index">
              <div class="heig d-f">
                  <div class="m-t3">{{item.name}}</div>
                  <div class="pz">{{item.time}}</div>
                  <div class="ppp m-t2"> <el-button type="primary" @click="cap(item,index)">标记已读</el-button></div>
              </div>
          </div>
          <div class="run"><el-button type="primary" @click="caps">全部标记为已读</el-button></div>
      </el-tab-pane>
      <!-- 删除全部 -->
      <el-tab-pane label="two">
          <div v-for="(item,index) in arrs" :key="index">
              <div class="heep d-f">
                  <div>{{item.name}}</div>
                  <div class="pzz">{{item.time}}</div>
                  <div class="ppp"> <el-button  @click="cctv(item,index)">删除</el-button></div>
              </div>
          </div>
          <div class="run"> <el-button type="danger" @click="cctvs">删除全部</el-button></div>
      </el-tab-pane>
      <!-- 清空所有 -->
      <el-tab-pane label="three">
          <div v-for="(item,index) in arrss" :key="index">
              <div class="heep d-f">
                  <div>{{item.name}}</div>
                  <div class="pzz">{{item.time}}</div>
                  <div class="ppp"><el-button  type="warning" @click="ccav(item,index)">还原</el-button></div>
              </div>
          </div>
          <div class="run"><el-button type="danger" @click="ccavs">清空回收站</el-button></div>
      </el-tab-pane>
    </el-tabs>
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
         activeName: 'second',
         arr:[
             {
                name:'【系统通知】该系统将于今晚凌晨2点到5点进行升级维护',
                time:'2020-6-12  9:03'
             },
             {
                 name:'今晚12点整发大红包,先到先得',
                 time:'2020-6-12  9:03'
             },
         ],
         arrs:[
             {
                 name:'【系统通知】该系统将于今晚凌晨2点到5点进行升级维护',
                  time:'2020-6-12  9:03'
             }
         ],
          arrss:[
             {
                 name:'【系统通知】您的优惠卷已经过期',
                  time:'2020-6-12  9:03'
             }
         ],
    };
  },
  methods: {
      cap (item,index){
          this.arr.splice(index,1)
          this.arrs.push(item)
      },
      cctv(item,index){
          this.arrs.splice(index,1)
          this.arrss.push(item)
      },
      ccav(item,index){
          this.arrss.splice(index,1)
          this.arr.push(item)
      },
      caps(){
         this.arrs = this.arrs.concat(this.arr) 
         this.arr = []
      },
      cctvs(){
         this.arrss = this.arrss.concat(this.arrs) 
         this.arrs = []
      },
      ccavs(){
          this.arrss = []
      }
  },
  mounted() {},
  watch: {},
  computed: {
      one(){
          return '未读消息'+ "("+this.arr.length +")";
      },
       two(){
          return '已读消息'+ "("+this.arrs.length +")";
      },
      three(){
          return '回收站'+ "("+this.arrss.length +")";
      },
  }
};
</script>

<style scoped lang='scss'>
.heig {
    height: 80px;
    border-bottom: 1px solid #ccc;
}
.heep {
     height: 80px;
    border-bottom: 1px solid #ccc;
    text-align: left;
    align-items: center;
}
.run {
    text-align: left;
    margin-top: 30px;
}
.ppp {
    position: absolute;
    right: 30px;
}
.pz {
    position: absolute;
    right: 150px;
    margin-top: 40px;
}
.pzz {
    position: absolute;
    right: 130px;
}
</style>