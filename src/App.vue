<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  overflow-x: hidden;
}

</style>
<script>
import Navbar from "@/components/Navbar";
export default {
  components: {Navbar
  }
}
</script>