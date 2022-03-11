<template>
  <div id="carouselExampleControls" class="carousel slide mt-5 mb-5" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100 car-slide" src="https://cdn.cnn.com/cnnnext/dam/assets/190905160525-new-dinosaur-species-illustration.jpg" alt="First slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100 car-slide" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRa6mGWe8TymB5yTx7qhnMXARlmnAmTCn1xg&usqp=CAU" alt="Second slide">
      </div>
      <div class="carousel-item car-slide">
        <img class="d-block w-100" src="https://images.omerlocdn.com/resize?url=https%3A%2F%2Fgcm.omerlocdn.com%2Fproduction%2Fglobal%2Ffiles%2Fimage%2Fc4311ca7-7cda-4cb1-af8a-789e0f4bfe64.jpg&width=1024&type=jpeg&stripmeta=true" alt="Third slide">
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },

}
</script>
<style>
.car-slide{
  width: 800px;
  height: 400px;
}
</style>