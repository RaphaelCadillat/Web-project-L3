<template>
<div class=" container mt-3 p-5">
  <h1>DinoForm</h1>
  <h2>Create and add your dino to your collection</h2>
  <FormInput title="id_user" type="text" v-model="id_user"/>
  <FormInput title="Name" type="text" v-model="Name"/>
  <FormInput title="Size in meters" type="number" v-model="Size"/>
  <div class="container mt-4 m-0 flex-row d-flex">
    <div class="container m-0 flex-column d-flex">
  <span>Dino's type</span>
  <select class="rounded" title="Type" v-model="Type" required >
    <option>T-rex</option>
    <option>Velociraptor</option>
    <option>Brachiosaurus</option>
    <option>Megalodon</option>
    <option>Ankylosaurus</option>
    <option>Parasaurus</option>
    <option>Archaeopteryx</option>
    <option>Megalosaurus</option>
  </select>
    </div>
    <div class="container m-0 flex-column d-flex">
      <span>Dino's caracteristics</span>
      <select class="rounded" title="Food choice" v-model="Carac" required>
        <option >Carnivore</option>
        <option >Herbivore</option>
      </select>
    </div>
  </div>
  <button class="bg-success mt-3 rounded border-0"  @click="postDetails">Submit !</button>


  <h1>Collection</h1>
  <FormInput title="id_user" type="text" v-model="id_user"/>
  <button class="btn-success rounded mt-3" @click="getUserDetails">Get Collection</button>
  <div class="container row m-0 mt-3">




  <Dinosaurs v-for="dino in dinos" v-bind:key="dino" :Carac=dino.carac :Name=dino.name :Size=dino.size :type=dino.type :id = dino.id_dinos></Dinosaurs>
  </div>
  <h2>Delete Dinosaur</h2>
  <FormInput title="id_dinos" type="text" v-model="id_dinos"/>

  <button class="btn-success rounded mt-3" @click="deleteUser">Delete Dino !</button>


</div>
</template>

<script>
import FormInput from "@/components/FormInput";
import Dinosaurs from "@/components/Dinosaurs";
const BASE_URL = "http://127.0.0.1:8081/";
const USER_URL = BASE_URL+"Dino/"

export default {
  name: "Form",
  components: {Dinosaurs, FormInput},
  data  () {
    return{
      Name : null,
      Size : Number,
      Type : String,
      Carac : '',
      id_dinos : null,
      id_user : null,
      dinos : [{
        name :'Edward',
        carac: 'Carnivore',
        type : "T-rex",
        size : 6.7,
        id_dinos : 1
      }
        ],

    }
  },
  methods : {

    postDetails(){
      if (this.Name!=='' && this.Type!=='' && this.Size!==null && this.Carac !== '' ){
      const postOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: this.Name,
          id_user: this.id_user,
          carac : this.Carac,
          type : this.Type,
          size : this.Size

        })
      }
      fetch(USER_URL+"detail", postOptions)
          .then(response => response.json())
          .then(res => {
            console.log(res);
          });
      this.getUserDetails();}
      else{
        alert("You have to fill all fields")
      }
    },
    deleteUser(){
      const deleteOptions = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
      };

      fetch(USER_URL+"detail/"+this.id_dinos, deleteOptions)
          .then(response => response.json())
          .then(res => console.log(res));
    },
    getUserDetails(){
      this.dinos = [];
      console.log("Trying to get user details for: "+ this.id_user);
      const URL = USER_URL+"detail/"+this.id_user;
      console.log(URL);

      fetch(URL).then(response => response.json()).then(res => {
        console.log(res);
        for (const dino of res ){
          this.dinos.push(dino);}})
      }



    }

  }


</script>

<style scoped>
h1{
  font-size: 10vh;
  font-family: Verdana,serif;
  color: #FFFFFF;
}
h2{
  font-size: 7vh;
  color: #FFFFFF;
}
select{
  background-color: #111215;
  border-color:  #27EE52;
  border-top: none;
  border-left: none;
  border-right: none  ;
  color: #FFFFFF;

}
span{
  text-align: left;
  color: #FFFFFF;
}
button{
  width: 30%;
  height: 7vh;
}
p{
  color: white;
}

</style>