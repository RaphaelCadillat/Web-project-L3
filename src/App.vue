<template>

  <div id="app">
    <Navbar/>
    <Homepage/>
  </div>
</template>

<script>
import Homepage from './components/Homepage.vue';
import Navbar from "@/components/Navbar";

export default {
  name: 'App',
  components: {
    Navbar,
    Homepage
  }
}
</script>

<style>

</style>
