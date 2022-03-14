<template>
<div class="card text-center bg-success m-0 col-md-3 mr-2" >
   <img v-bind:src="require('../assets/'+ this.Type + '.jpg')" alt="" style="width: 100%;height: 50%" class="mt-3" />
  <div class="container m-0 d-flex flex-column">
  <h1>{{Name}}</h1>
    <p>Alimentation : {{Carac}}<br>Race : {{Type}}<br>Size : {{Size}} meters</p>
  </div>

</div>
</template>

<script>
export default {
  name: "Dinosaurs",

  props : {
      Name: String,
      Carac: {
        type :String,
        default : ''
      },
    Type : String,
    Size : Number
    },
  data() {
    return {
      imageurl : {
        type : String,
        default : "../assets/" + this.Type + ".jpg"
      }
    }
  }

  }

</script>

<style scoped>
.card{
  border: black 2px solid;
}
</style>