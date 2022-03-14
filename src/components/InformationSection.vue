<template>
  <section class="bg-success text-center m-0 p-0">
    <div class="container">
      <h1 class="mt-3">About Us</h1>
      <div>

      </div>
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-4 mt-3 container d-flex flex-column">
          <img src="../assets/profile1.jpg" alt="">
          <span>Raphaël Cadillat</span>

        </div>
        <div class="col-md-4 mt-3 container d-flex flex-column">
          <img src="../assets/Profile2.jpg" alt=""/>
          <span>Eva Chambaron</span>
        </div>
        <div class="col-md-2"></div>

        <div class="col-md-8 m-auto mt-4">
          <p>We're student in third year's at Efrei Paris an engineering school</p>
          <p>This project was produced for the Advanced Web Programming course in Concordia </p>
        </div>

      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: "InformationSection"
}
</script>

<style scoped>
section {
  height: 100vh;
  width: 100vw;
  margin: auto;
}
p{
  font-size: 4vh;
}
span{
  font-size: 4vh;
}
</style>