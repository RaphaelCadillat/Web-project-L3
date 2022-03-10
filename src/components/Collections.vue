<template>
<div>
  <section class="rounded bg-success" style="height: 200px; width: 200px">{{title}}</section>
</div>
</template>

<script>
export default {
  name: "Collections.vue",
  props:{
    title : String
  }
}
</script>

<style scoped>

</style>