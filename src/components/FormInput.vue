<template>
<div class="container mt-4 m-0 flex-column d-flex" style="width: 100%" >
  <span class="text-left">{{title}}</span>
  <input class="rounded" :placeholder="title" :type="type" v-on:input="updateValue($event.target.value)" v-bind:value="value" required/>
</div>
</template>

<script>
export default {
  name: "FormInput",
  props : {
    title : String,
    type : String,
    bind : String
  },

  methods : {
    updateValue: function (value) {
      this.$emit( 'input',value);
    }
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

  color: #FFFFFF;
  text-align: left;
}
</style>