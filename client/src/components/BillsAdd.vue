<template>
<div class='container'>
        <div class='alert alert-danger' v-show='errors && errors.length>0'>
            <li v-for='error in errors' v-bind:key='error'>
                {{error}}
            </li>
        </div>
        <h1>Add Bill</h1>
        <form>
            <div class='form-group'>
                <input id='name' type='text' class='form-control' v-model.trim='newname' placeholder='Enter Name'>
            </div>
            <div class='form-group'>
                <input id='amount' type='number' class='form-control' v-model.trim='newamount' placeholder='Enter Amount'>
            </div>
            <div class='form-group'>
                <input id='description' type='text' class='form-control' v-model.trim='newdescription' placeholder='Enter Description'>
            </div>
                 <button class="btn btn-primary" v-on:click="addBills">Add</button>
           </form>
</div>

</template>

<script>
export default {
name:'BillsAdd',
  data(){
        return{
            newname:'',
            newamount:0,
            newdescription:'',
            errors:[]
            
        }
    },
    methods:{
        addBills(){
            this.errors=[]
            if(this.newname && this.newamount && this.newdescription){
                let bill = {name: this.newname, amount:this.newamount, description:this.newdescription}
                this.$emit('bill-added', bill)
                this.newname = ''
                this.newamount = ''
                this.newdescription=''
            }else{
                this.errors.push('All Fields Required')
            }
        }
    }
}
</script>

<style>

</style>
