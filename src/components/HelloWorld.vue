<template>
  <div>
    <h4>{{msg}}</h4>
    <el-table :data="tableData" row-key="id" ref="evtTable" @cell-click="rowClick">
      <!-- align="left" -->
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-table :data="props.row.Children">
            <el-table-column label="用户ID" align="center" :show-overflow-tooltip="true" prop="id"></el-table-column>
            <el-table-column label="业务类型" align="center" :show-overflow-tooltip="true" prop="type"></el-table-column>
            <el-table-column label="店铺名字" align="center" :show-overflow-tooltip="true" prop="shop"></el-table-column>
          </el-table>
        </template>
      </el-table-column>
      <el-table-column label="字典名称" align="center" prop="name" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column label="状态" align="center" prop="lingshi"></el-table-column>
      <el-table-column label="备注" align="center" prop="remark" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column label="地址" align="center" prop="address" width="180"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'table嵌套使用方法',
      tableData: [
        {
          id: '12987122',
          name: '好滋好味鸡蛋仔',
          lingshi: '江浙小吃、小吃零食',
          remark: '备注信息',
          address: '上海市普陀区真北路',
          Children: [
            {
              id: '12987122',
              type: '中文类型',
              address: '上海市普陀区真北路',
              shop: '王小虎夫妻店',
            },
          ],
        },
        {
          id: '12987123',
          name: '好滋好味鸡蛋仔',
          lingshi: '江浙小吃、小吃零食',
          remark: '备注信息',
          address: '上海市普陀区真北路',
          Children: [],
        },
      ],
    }
  },
  methods: {
    rowClick() {
      console.log('有反应吗')
      console.log(this.tableData[0].Children)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
