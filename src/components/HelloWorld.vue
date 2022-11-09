<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%"
    max-height="300"
      fit="false"
      :row-style="{height: '2px'}"
      :cell-style="{padding: '0'}"
    >
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      >



    <template slot-scope='scope'>
      <el-popover
      placement="top-start"
      width="400"
      trigger="hover">
        <span>{{scope.row.address}}</span>
        <span slot="reference">{{scope.row.address.substr(1,20) + '...'}}</span>
      </el-popover>
    </template>

    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'table嵌套使用方法',
      tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
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
</style>
