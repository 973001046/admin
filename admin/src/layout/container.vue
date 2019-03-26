<template>
  <div class="center">
    <div class="navbar-left">
      <left-bar></left-bar>
    </div>
    <router-view class="router-view"></router-view>
  </div>
</template>

<script>
import LeftBar from './leftbar'

export default {
  name: 'cantainer',
  components: {
    LeftBar
  }
}
</script>