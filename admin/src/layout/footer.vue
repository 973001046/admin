<template>
  <div class="footer">
    <el-row>
      <el-col :offset="1" :span="22">
        <dl>
          <dt>友情链接：</dt>
          <dd><a href="#" target="_blank">有限元科技</a></dd>
          <dd><a href="#" target="_blank">Feaworks</a></dd>
        </dl>
      </el-col>
    </el-row>

    <div class="copyright">Copyright @ 2018 - 2027 深圳市有限元科技有限公司 版权所有 备案/许可证号： 粤ICP备15109736号-2</div>
  </div>
</template>

<script>

export default {
  name: 'foot',
}
</script>

<style lang='less' scoped>
.footer {
  color: #fff;
  line-height: 50px;
  .el-row {
    height: 50px;
    text-align: left;
  }
  dl {
    font-size: 16px;
    color: #353535;
    dt,dd {
      display: inline-block;
      margin-right: 20px;
    }
    dd {
      a {
        color: #9a9a9a;
        text-decoration: none;
      }
    }
  }
  .copyright {
    background-color: #404850;
    font-size: 14px;
  }
}
</style>
