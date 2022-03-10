<template>
  <div class="container">
    Bienvenue
    <section class="container bg-danger mt-2 rounded">
      <div class="" style="height: 200px">
        Oui
      </div>
    </section>
    <section class="container text-center">
    <h2 style="color: white">My collections</h2>
      <Collections/>

    </section>
  </div>
</template>

<script>
import Collections from "@/components/Collections";
export default {
  name: 'Homepage',
  components: {
    Collections
  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
