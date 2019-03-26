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
</style>
