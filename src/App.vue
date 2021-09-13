<template>
  <div class="container">
    <home />
  </div>
</template>

<script>
import home from '@/components/Home.vue'

export default {
  name: 'App',
  components: {
    home,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
