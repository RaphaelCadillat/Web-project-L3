<template>
  <section class="container d-flex flex-row flex-nowrap m-0">
    <div class="left container m-0 p-5 d-flex flex-column text-left">
      <h1 class="mt-3">Welcome to <br>DinoCollec</h1>
      <div>
      <p class="mt-3 text-left">On this website you'll be able to create and complete your own dino collection !</p>
      </div>
    </div>
    <div class="container m-0 p-5 d-flex flex-column">
      <h2 class="mt-3 ml-3">Start your collection ! </h2>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection"
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