<template>
<div class="container mt-4" style="width: 100%">
  <span class="mr-3">{{title}}</span>
  <input class="rounded" :placeholder="title" :type="type">
</div>
</template>

<script>
export default {
  name: "FormInput",
  props : {
    title : String,
    type : String
  }
}
</script>

<style scoped>
input{
  background-color: #111215;
  border-color:  #27EE52;
  border-top: none;
  border-left: none;
  border-right: none  ;
  color: #FFFFFF;
}
span{
  margin-right: 15%;
  color: #FFFFFF;

}
</style>