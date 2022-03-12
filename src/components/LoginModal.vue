<template>
  <section id="modal-backdrop" class="m-auto opacity-0" >
    <div class="modal">
      <div class="container row p-0 mb-2">
        <div class="col-md-6 col-xs-12">
          <img src="https://resize3.prod.docfr.doc-media.fr/s/1200/img/var/doctissimo/storage/images/fr/www/psychologie/dictionnaire-des-reves/rever-de-dinosaure/793443-1-fre-FR/rever-de-dinosaure.jpg" alt="">
        </div>
        <div v-if="isRegistered" id="login" class="col-md-6 col-xs-12 d-flex flex-column" style="display:flex">
          <button class=" close" @click="close">X</button>
        <h2>LogIn!</h2>
          <FormInput title="Username" type="text"/>
          <FormInput title="Password" type="password"/>
          <FormInput class="ml-3" title="Remember me" type="checkbox"/>
          <button class="bg-success btn mt-3 mb-3 m-auto" style="width: 50%">Log In !</button>
          <span @click="isRegister">Not registered yet ? Create an account</span>
        </div>
        <div id="register" v-if="isRegistered===false" class="col-md-6 col-xs-12 d-flex flex-column">
          <button class="close" @click="close">X</button>
          <h2>Register</h2>
          <FormInput title="Username" type="text"/>
          <FormInput title="Password" type="password"/>
          <button class="bg-success btn mt-3 mb-3 m-auto" style="width: 50%">Register !</button>
          <span @click="isRegister">Already have an account ? Sign in !</span>
        </div>

      </div>
      


    </div>
  </section>
</template>

<script>
import FormInput from "@/components/FormInput";
export default {
  name: "LoginModal",
  components : {
    FormInput
  },
  data () {
    return {
      isRegistered : true,
      username : String,
      password : String
      }
    },
  methods : {
    close(){
      this.$emit('close');
    },
    isRegister(){
      this.isRegistered = !this.isRegistered;
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
  border: 2px #27EE52 solid;



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
  margin-left: 95%;
  width: 10%;
  background-color: transparent;
  border: none;
  color: #27EE52;
  margin-top: 5px;
}

</style>