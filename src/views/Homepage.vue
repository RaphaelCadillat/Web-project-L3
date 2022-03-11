<template class="m-0">
  <div class="container m-0 p-0">
    <Carroussel/>
    <div class="Section">
    <HeroSection color="bg-success"/>
    </div>

    <InformationSection/>
  </div>
</template>

<script>
import Carroussel from "@/components/Carroussel";
import HeroSection from "@/components/HeroSection";
import InformationSection from "@/components/InformationSection";
export default {
  name: 'Homepage',
  components: {
    HeroSection,
    Carroussel,
    InformationSection



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
.Section{
  width: 100vw;
  height: 100vh;
}
template{
  margin:0;}
</style>
