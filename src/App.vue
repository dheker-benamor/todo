<template>
  <div id="app">
    <Header></Header>
    <todos></todos>
  </div>
</template>

<script>

import Todos from "@/components/Todos";
import Header from "@/components/Header";


export default {
  components: {
    Todos,
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
