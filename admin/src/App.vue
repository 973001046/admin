<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'MicrosoftYaHei', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.clearfix:after {
  content: '';
  display: block;
  height: 0;
  font-size: 0;
  overflow: hidden;
  clear: both;
}
.el-table--border, .el-table--group{
  border: none;
}
.el-table__header-wrapper th:nth-last-of-type(2){
  border-right: none;
}
.el-table--border td:nth-last-of-type(1){
  border-right: none;
}
.el-table--border::after, .el-table--group::after{
  width: 0;
}
</style>
