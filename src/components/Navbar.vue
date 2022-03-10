<template>
  <nav>
    <div class="container d-flex flex-flow">
    <div class="leftnav container d-flex flex-flow" >
      <span>
        <img src="../ressources/iconhome.png" alt=""/>
      </span>
      <span>
        <img src="../ressources/direction1.png" class="ml-4" alt="">
      </span>
      <span>
        <img src="../ressources/Message_alt.png" class="ml-4" alt=""/>
      </span>
    </div>
      <div class="title container text-center flex-flow d.flow">
        <span class="text-center">Title</span>
      </div>
    <div class="rightnav container">
      <span><img src="../ressources/User.png"  alt=""/> Login/Register</span>
    </div>
    </div>
  </nav>
</template>
<script>


export default {
  name: "Navbar.vue",
}
</script>
<style>
body {
  margin: 0;
}

nav {
  top: 0;
  background-color: limegreen;
  padding: 5px;
  color: white;
  font-size: large;
}
.leftnav{
  width: 40% ;
}
.rightnav{
  margin-left: 30%;
}

.title{
}
</style>