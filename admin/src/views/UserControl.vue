<template>
  <div class="about">
    <div class="title el-icon-tickets"><span>用户管理</span></div>
    <div class="form clearfix">
      <div class="time">
        <span class="txt">查询时间</span>
        <el-date-picker class="picker" size="mini" type="date" placeholder="选择日期"></el-date-picker>
        <el-date-picker class="picker" size="mini" type="date" placeholder="选择日期"></el-date-picker>
        <el-button size='mini' class="confirm">确 认</el-button>
      </div>

      <div class="search">
        <el-input size="mini" v-model="searchTxt" placeholder="请输入内容"></el-input>
        <el-button size="mini" class="confirm" type="primary" icon="el-icon-search">搜索</el-button>
      </div>
    </div>
    <div class="content-table">
      <el-table :data="tableData" :stripe='true' :border='true' :cell-style='cellBorder' :span-method="arraySpanMethod" :header-cell-style="tableHeaderColor">
        <el-table-column prop="date" label="注册时间" width="170"></el-table-column>
        <el-table-column prop="type" label="用户类型" width="88"></el-table-column>
        <el-table-column prop="userName" label="用户名"></el-table-column>
        <el-table-column prop="companey" label="企业名"></el-table-column>
        <el-table-column prop="to" label="归属销售"></el-table-column>
        <el-table-column prop="money" label="金额"></el-table-column>
        <el-table-column prop="ticket" label="消费劵"></el-table-column>
        <el-table-column prop="recharge_record" label="充值纪录"></el-table-column>
        <el-table-column prop="consumption_record" label="消费纪录"></el-table-column>
        
        <el-table-column label="积分" width="200">
          <template slot-scope="scope">
            <div class="cols-two">
              <div>{{scope.row.much}}</div>
              <div><el-button size="mini" class="confirm" type="primary">积分记录</el-button></div>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchTxt: '',
      tableData: [{
          date: '2018-10-24 10:22:24',
          type: '企业用户',
          userName: '小明',
          companey: '阿里巴巴',
          to: '小明',
          money: '￥40000,00元',
          ticket: '￥40000,00元',
          recharge_record:' 充值纪录',
          consumption_record: '消费纪录',
          much: 0
        },{
          date: '2018-10-24 10:22:24',
          type: '企业用户',
          userName: '小明',
          companey: '阿里巴巴',
          to: '小明',
          money: '￥40000,00元',
          ticket: '￥40000,00元',
          recharge_record:' 充值纪录',
          consumption_record: '消费纪录',
          much: 0
        },{
          date: '2018-10-24 10:22:24',
          type: '企业用户',
          userName: '小明',
          companey: '阿里巴巴',
          to: '小明',
          money: '￥40000,00元',
          ticket: '￥40000,00元',
          recharge_record:' 充值纪录',
          consumption_record: '消费纪录',
          much: 0
        },{
          date: '2018-10-24 10:22:24',
          type: '企业用户',
          userName: '小明',
          companey: '阿里巴巴',
          to: '小明',
          money: '￥40000,00元',
          ticket: '￥40000,00元',
          recharge_record:' 充值纪录',
          consumption_record: '消费纪录',
          much: 0
        },{
          date: '2018-10-24 10:22:24',
          type: '企业用户',
          userName: '小明',
          companey: '阿里巴巴',
          to: '小明',
          money: '￥40000,00元',
          ticket: '￥40000,00元',
          recharge_record:' 充值纪录',
          consumption_record: '消费纪录',
          much: 0
        },{
          date: '2018-10-24 10:22:24',
          type: '企业用户',
          userName: '小明',
          companey: '阿里巴巴',
          to: '小明',
          money: '￥40000,00元',
          ticket: '￥40000,00元',
          recharge_record:' 充值纪录',
          consumption_record: '消费纪录',
          much: 0
        },{
          date: '2018-10-24 10:22:24',
          type: '企业用户',
          userName: '小明',
          companey: '阿里巴巴',
          to: '小明',
          money: '￥40000,00元',
          ticket: '￥40000,00元',
          recharge_record:' 充值纪录',
          consumption_record: '消费纪录',
          much: 0
        },{
          date: '2018-10-24 10:22:24',
          type: '企业用户',
          userName: '小明',
          companey: '阿里巴巴',
          to: '小明',
          money: '￥40000,00元',
          ticket: '￥40000,00元',
          recharge_record:' 充值纪录',
          consumption_record: '消费纪录',
          much: 0
        },]
    }
  },
  methods: {
    tableHeaderColor ({ rowIndex }) {
      if (rowIndex === 0) {
        return 'background-color: #738591; color: #fff; font-size: 14px; font-weight: 500; text-align: center; border-right: 1px solid #667681;'
      }
    },
    arraySpanMethod ({ rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 10) {
          return [1, 2];
        }
      }
    },
    cellBorder () {
      return 'border: none; border-right: 1px solid #667681; text-align: center; font-size: 12px; color: #7b7b7b'
    }
  }
}
</script>


<style lang='less'>
.cols-two {
  display: table;
  width: 100%;
  height: 100%;
}
.cols-two div {
  display: table-cell;
  width: 50%;
}
.about {
  background-color: #fff;
  overflow: hidden;
  .form {
    .confirm {
        background-color: #337ab7;
        color: #fff;
      }
    .time {
      float: left;
      font-size: 14px;
      color: #353535;
      .txt {
        margin-left: 50px;
        margin-right: 12px;
      }
      .picker {
        margin-right: 15px;
      }
      .el-date-editor {
        &.el-input {
          width: 145px;
          height: 25px;
        }
      }
    }
    .search {
      float: right;
      .el-input {
        width: 230px;
        margin-right: 15px;
      }
      margin-right: 30px;
    }
  }
}
.title {
  display: block;
  background-color: #f6f8f9;
  margin: 10px 30px;
  height: 45px;
  line-height: 45px;
  text-indent: 10px;
  &.el-icon-tickets {
    font-size: 20px;
    span {
      font-size: 18px;
      color: #353535;
      padding-left: 4px;
    }
  }
}
// .el-table--border, .el-table--group{
//   border: none;
// }
// .el-table thead {
//   background-color: #738591;
// }
// .el-table__header-wrapper th:nth-last-of-type(2){
//   border: none;
// }
// .el-table--border td:nth-last-of-type(1){
//   border: none;
// }
// .el-table--border::after, .el-table--border::before, .el-table--group::after, .el-table--group::before{
//   width: 0;
// }
// .el-table td, .el-table th.is-leaf {
//   border: none !important;
// }
.content-table {
  margin: 30px 30px 0;
}
</style>
