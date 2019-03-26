<template>
  <div class="about">
    <div class="title el-icon-tickets"><span>用户管理</span></div>
    <div class="form clearfix">
      <div class="time">
        <span>查询时间</span>
        <el-date-picker type="date" placeholder="选择日期"></el-date-picker>
        <el-date-picker type="date" placeholder="选择日期"></el-date-picker>
        <el-button type='mini'>默认按钮</el-button>
      </div>

      <div class="search">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </div>
    </div>
  </div>
</template>

<style lang='less' scoped>
.about {
  background-color: #fff;
  overflow: hidden;
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
</style>
