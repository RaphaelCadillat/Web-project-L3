<template>
  <section class="container row m-0">
    <div class="left container m-0 p-3 d-flex flex-column text-left col-md-6 col-sm-12">
      <h1 class="mt-3">Welcome to <br>DinoCollec</h1>
      <div>
      <p class="mt-3 text-left">On this website you'll be able to create and complete your own dino collection !</p>
      </div>
    </div>
    <div class="container  m-0 p-3 d-flex flex-column m-auto col-md-6 col-sm-12">

      <Dinosaurs Name="Kevin" Size=6.7 Type="T-rex" Carac="Carnivore" class="col-md-12 m-auto"/>
      <router-link to="/form">
      <h2 class="mt-3 text-center">Start your collection ! </h2>
      </router-link>
    </div>
  </section>
</template>

<script>
import Dinosaurs from "@/components/Dinosaurs";
export default {
  name: "HeroSection",
  components: {Dinosaurs}
}
</script>

<style scoped>
section {
  width: 100vw;
  height: 100vh;
}
.left{
  color: white;



}
h1{
  font-family: Verdana,serif;
  font-size: 12vh;
  text-align: left;
}
p{
  font-size: 7vh;
  color: #27EE52;
  text-align: left;
}
h2{
  font-size: 6vh;
  text-align: left;
  color: #27EE52;
}
</style>