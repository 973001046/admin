<template>
  <div class="center">
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