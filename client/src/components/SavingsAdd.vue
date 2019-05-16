<template>
<div class='container'>
        <div class='alert alert-danger' v-show='errors && errors.length>0'>
            <li v-for='error in errors' v-bind:key='error'>
                {{error}}
            </li>
        </div>
        <h1>Add Savings</h1>
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
                 <button class="btn btn-primary" v-on:click="addSavings">Add</button>
           </form>
</div>
</template>

<script>
export default {
    name:'SavingsAdd',
    data(){
        return{
            newname:'',
            newamount:0,
            newdescription:'',
            errors:[]
            
        }
    },
    methods:{
        addSavings(){
            this.errors=[]
            if(this.newname && this.newamount && this.newdescription){
                let savings = {name: this.newname, amount:this.newamount, description:this.newdescription}
                this.$emit('savings-added', savings)
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
