<template>
<div class=" container mt-3 p-5">
  <h1>DinoForm</h1>
  <h2>Create and add your dino to your collection</h2>
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
  <button class="bg-success mt-3 rounded border-0"  @click="submitForm">Submit !</button>
  <div class="container row m-0 mt-3">
    <h1>Collection</h1>
  <Dinosaurs v-for="dino in dinos" v-bind:key="dino" :Carac=dino.Carac :Name=dino.Name :Size=dino.Size :type=dino.Type></Dinosaurs>
  </div>

</div>
</template>

<script>
import FormInput from "@/components/FormInput";
import Dinosaurs from "@/components/Dinosaurs";
export default {
  name: "Form",
  components: {Dinosaurs, FormInput},
  data  () {
    return{
      Name : '',
      Size : Number,
      Type : String,
      Carac : '',
      dinos : [{
        Name :'Edward',
        Carac: 'Carnivore',
        Type : "T-rex",
        Size : 6.7,
      },{
      Name : 'Philip',
      Carac: 'Herbivore',
      Type : "Archaeopteryx",
      Size : 1.2},
        {Name: 'Titouan',
        Carac: "Carnivore",
        Type: "Megalodon",
        Size: 150},
        {
          Name : 'Philip',
          Carac: 'Herbivore',
          Type : "Archaeopteryx",
          Size : 1.2},
        {Name: 'Xavier',
          Carac: "Carnivore",
          Type: "T-rex",
          Size: 12},
        {
          Name : 'Philip',
          Carac: 'Herbivore',
          Type : "Archaeopteryx",
          Size : 1.2},
        {Name: 'Pascal',
          Carac: "Herbivore",
          Type: "Megalosaurus",
          Size: 7}],

    }
  },
  methods : {
    submitForm(){
      let dino = {
        Name : this.Name,
        Carac : this.Carac,
        Type : this.Type,
        Size : this.Size
      };

      this.dinos.push(dino);

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