<template>
  <div class="app-layout">
    <app-header></app-header>
    <app-container></app-container>
  </div>
</template>

<script>
import AppHeader from './header'
import AppContainer from './container'

export default {
  name: 'header',
  components: {
    AppHeader,
    AppContainer
  }
}
</script>