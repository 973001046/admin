<template>
  <div class="head">
    <el-row>
      <el-col :offset="2" :span="20">
        <div class="grid-content clearfix">
          <div class="logo">仿真云平台</div>
          <div class="right-part">
            <el-button size='mini'>退出</el-button>
            <div class="user">小明</div>
            <el-badge :value="12" class="item">
              <img src="@/assets/ling.png" alt="">
            </el-badge>
            <a href="#"><div class="home">首页</div></a>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'TopHeader',
}
</script>

<style lang='less' scoped>
.grid-content {
  margin: 0 auto;
  .logo {
    float: left;
    height: 100px;
    line-height: 100px;
    background: url('../assets/logo.jpg') no-repeat left 6px;
    padding-left: 140px;
  }
}
.head {
  height: 100px;
  // box-shadow: 1px 0 5px #000;
}
.right-part {
  float: right;
  .el-button {
    display: block;
    float: right;
    background-color: #337ab7;
    color: #fff;
    margin-top: 37px;
  }
  .user, .item, .home {
    float: right;
    height: 100px;
    margin-right: 40px;
  }
  .el-icon-bell {
    font-size: 35px;
    color: #337ab7;
  }
  .item {
    margin-top: 30px;
    margin-right: 55px;
    img {
      width: 27px;
      height: 33px;
      margin-top: 5px;
    }
  }
  .user {
    line-height: 100px;
    background: url(../assets/user.png) no-repeat left center;
    padding-left: 40px;
  }
  .home {
    line-height: 100px;
    background: url(../assets/home.png) no-repeat left center;
    padding-left: 40px;
    color: #337ab7;
  }
}
</style>
