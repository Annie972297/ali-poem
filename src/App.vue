<template>
  <div id="app">
    <!--<router-view/>-->
    <poem-app/>
  </div>
</template>

<script>
import PoemApp from './components/PoemApp.vue'
export default {
  components: { PoemApp },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,body{
  height:100%;
}
</style>
