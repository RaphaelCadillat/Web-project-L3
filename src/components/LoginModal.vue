<template>
  <section id="modal-backdrop" class="m-auto opacity-0" >
    <div class="modal m-0 p-0">
      <div class="container row p-0 m-0">
        <div class="col-md-6 col-xs-12 m-0">
          <img src="https://resize3.prod.docfr.doc-media.fr/s/1200/img/var/doctissimo/storage/images/fr/www/psychologie/dictionnaire-des-reves/rever-de-dinosaure/793443-1-fre-FR/rever-de-dinosaure.jpg" alt="">
        </div>
        <div v-if="isRegistered" id="login" class="col-md-6 col-xs-12 d-flex flex-column m-0" style="display:flex">
          <button class=" close" @click="close">X</button>
        <div class="d-flex flex-column align-content-center" style="justify-content: center">
          <h2>LogIn!</h2>
          <FormInput title="Username" type="text" v-model="username"/>
          <FormInput title="Password" type="password" v-model="password"/>
          <FormInput class="ml-3" title="Remember me" type="checkbox"/>
          <button class="bg-success btn mt-3 mb-3 m-auto" style="width: 50%">Log In !</button>
          <span @click="isRegister">Not registered yet ? Create an account</span>
        </div>
        </div>
        <div id="register" v-if="isRegistered===false" class="col-md-6 col-xs-12 d-flex flex-column m-0">
          <button class="close" @click="close">X</button>
          <h2>Register</h2>
          <FormInput title="Username" type="text" v-model="username"/>
          <FormInput title="Email   " type="email" v-model="email"/>
          <FormInput title="Password" type="password" v-model="password"/>
          <button class="bg-success btn mt-3 mb-3 m-auto" @click="postUser" style="width: 50%">Register !</button>
          <span @click="isRegister">Already have an account ? Sign in !</span>
        </div>

      </div>
      


    </div>
  </section>
</template>

<script>
import FormInput from "@/components/FormInput";
const BASE_URL = "http://127.0.0.1:8081/";
const USER_URL = BASE_URL+"Dino/"
export default {
  name: "LoginModal",
  components : {
    FormInput
  },
  data () {
    return {
      isRegistered : true,
      username : String,
      password : String,
      email : String
      }
    },
  methods : {
    close(){
      this.$emit('close');
    },
    isRegister(){
      this.isRegistered = !this.isRegistered;
    },
    postUser(){
      const postOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: this.username,
          email : this.email,
          password : this.password,
        })
      }
      fetch(USER_URL+"createuser", postOptions)
          .then(response => response.json())
          .then(res => {
            console.log(res);
          });
  }}}

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
  width: 75%;
  height: 75%;
  top: 12.5%;
  left: 12.5%;
  transform: translateX(0%);
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