<template>
  <div>
  <nav>
    <div class="container d-flex flex-flow m-0">
      <div class="title text-center">
        <h1>DinoCollec</h1>
      </div>
    <div class="leftnav container d-flex flex-flow m-0" >
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
    <div class="rightnav container m-0">
      <span class="log ml-5" @click="isModal"><img src="../ressources/User.png"  alt=""/> Login/Register</span>
    </div>

    </div>

  </nav>
    <div>
    <LoginModal @close="closeModal"/>
    </div>
  </div>
</template>
<script>

import LoginModal from "@/components/LoginModal";
export default {
  name: "Navbar.vue",
  components : {
    LoginModal
  },
  data(){
    return {
    }
  },
  methods : {
    isModal() {
      document.getElementById("modal-backdrop").style = "display: flex;"
      document.body.style = "overflow-y: hidden;"
    },
    closeModal() {
      document.getElementById("modal-backdrop").style = "display: none;"
      document.body.style = "overflow-y: scroll;"
    }
  }
}
</script>
<style>
body {
  margin: 0;
}
nav {
  top: 0;
  background-color: black;
  padding: 5px;
  width: 100%;
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
.log {
margin-left: 70%;
}
.title{
}


</style>