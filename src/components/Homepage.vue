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
      <input v-model="titlecoll" type="text">
      <button class="btn bg-danger" v-on:click="addcollec">Add Collection</button>
      <div v-for="collecs in collec" v-bind:key="collecs">
      <Collections :title=collecs.title />
      </div>

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

  data()  {
    return {
      collec:[],
      titlecoll : ""
    }
  },
  methods :{
    addcollec(){
      this.collec.push({title : this.titlecoll})
    }
  }



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
