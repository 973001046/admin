<template>
  <div class="app-layout">
    <el-container>
      <el-header>
        <app-head></app-head>
      </el-header>
      <el-container class="clearfix" :style='{height: screenHeight}'>
        <el-aside width="250px">asdas</el-aside>
        <el-main>
          <app-container></app-container>
        </el-main>
      </el-container>
      <el-footer>
        <app-footer></app-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import AppHead from './head'
import AppContainer from './container'
import AppFooter from './footer'

export default {
  name: 'Index',
  components: {
    AppHead,
    AppContainer,
    AppFooter
  },
  computed: {
    screenHeight () {
      return window.innerHeight - 200 + 'px'
    }
  }
}
</script>

<style lang='less' scope>
.el-header, .el-footer {
  color: #333;
  text-align: center;
  height: 100px!important;
  padding: 0 !important;
}
.el-header{
  box-shadow: 1px 0 3px #666;
  z-index: 9;
}
.el-aside {
  background-color: #3c454e;
}
.el-main {
  background-color: #f6f8f9;
}
</style>
