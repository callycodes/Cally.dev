<template>
  <div id="app">
    <Top/>
    <router-view/>
  </div>
</template>

<script>
import Top from './components/Navs/TopNav/Top'

export default {
  name: 'App',
  components: {
    Top
  }
}
</script>

<style>
#app {
  padding: 60px;
  
  
}
</style>
