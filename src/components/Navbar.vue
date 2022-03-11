<template>
  <nav>
    <div class="container d-flex flex-flow">
    <div class="leftnav container d-flex flex-flow" >
      <span>
        <router-link to="/">
        <img src="../ressources/iconhome.png" alt=""/>
        </router-link>
      </span>
      <span style="margin-left: 10px">
        <router-link to="/about">
        <img src="../ressources/direction1.png" class="ml-4" alt="">
        </router-link>
      </span>
      <span style="margin-left: 10px">
        <router-link to="/form">
        <img src="../ressources/Message_alt.png" class="ml-4" alt=""/>
          </router-link>
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
  width: 100vw;
  color: white;
  font-size: large;
  opacity: 0.5;
  position: fixed;
  z-index: 200;


}
nav:hover{
  opacity: 1;
}
.leftnav{
  width: 40% ;
  margin: 0;
}
.rightnav{
  margin-left: 30%;
}

.title{
}

</style>