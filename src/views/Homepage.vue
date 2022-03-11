<template>
  <div class="container">
    Bienvenue
    <section class="container bg-danger mt-2 rounded">
      <div class="" style="height: 200px">
        Oui
      </div>
    </section>
    <Carroussel/>
  </div>
</template>

<script>
import Carroussel from "@/components/Carroussel";
export default {
  name: 'Homepage',
  components: {
    Carroussel



  },

  data()  {
    return {
      slides: [
          'https://static.nationalgeographic.fr/files/styles/image_3200/public/3a_fallen_kingdom.jpg_5ntosy1.jpg?w=710&h=533',
          'https://cdn.futura-sciences.com/buildsv6/images/wide1920/c/7/3/c73d103897_50177233_australotitan-cooperensis-vlad-konstantinov-eromanga-natural-history-museumjpg.jpg'
      ]
    }
  },
  methods :{
  }



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
