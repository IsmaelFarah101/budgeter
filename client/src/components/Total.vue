<template>
  <div class="card" style="width: 20rem; height: 20rem">
  <div class="card-body">
    <h5 class="card-title">{{name}}</h5>
    <h2 class="card-text">{{total}}</h2>
  </div>
</div>
</template>

<script>
export default {
    name:'Total',
    props:{
      name:String,
      data:Array

},
computed:{
  total: function(){
    let total = 0
    this.data.forEach(element => {
      total = total + element.amount
    });
    return `$ ${total.toFixed(2)}`
  }
},

}
</script>

<style>
.card{
   width: 100%;
  display: flex;
  flex-direction: column

}
 

</style>
