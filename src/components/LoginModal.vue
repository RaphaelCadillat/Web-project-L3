<template>
  <section id="modal-backdrop" class="m-auto opacity-0" >
    <div class="modal">
      <div class="container row p-0 mb-2">
        <div class="col-md-6">
          <img src="https://resize3.prod.docfr.doc-media.fr/s/1200/img/var/doctissimo/storage/images/fr/www/psychologie/dictionnaire-des-reves/rever-de-dinosaure/793443-1-fre-FR/rever-de-dinosaure.jpg" alt="">
        </div>
        <div class="col-md-6">
          <button class="btn-success close rounded" @click="close">X</button>
        <h2>LogIn/SignUp !</h2>
        </div>
      </div>
      


    </div>
  </section>
</template>

<script>
export default {
  name: "LoginModal",
  methods : {
    close(){
      this.$emit('close');
    }
  }
}
</script>

<style scoped>
section{
}
#modal-backdrop {
  display: none;

  position: fixed;
  /*display: flex;*/
  justify-content: center;
  align-items: center;
  width: 75vw;
  height: 75vh;
  top: 12.5vh;
  left: 12.5vw;
  transform: translateX(0%);
  overflow-y:hidden;


}
.modal {
  background: #111215;
  box-shadow: 2px 2px 20px 1px;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;

}
img{
  height: 100%;
  width: 100%;
}
.close{
  left: 75%;
  width: 10%;
}

</style>