<template>
<div class='container'>
        <div class='alert alert-danger' v-show='errors && errors.length>0'>
            <li v-for='error in errors' v-bind:key='error'>
                {{error}}
            </li>
        </div>
        <h1>Add Income</h1>
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
            <div class='form-group'>
                <input id='from' type='text' class='form-control' v-model.trim='newfrom' placeholder="Enter From">
            </div>
                 <button class="btn btn-primary" v-on:click="addIncome">Add</button>
           </form>
</div>
</template>

<script>
export default {
    name:'IncomeAdd',
    data(){
        return{
            newname:'',
            newamount:0,
            newdescription:'',
            newfrom:'',
            errors:[]
            
        }
    },
    methods:{
        addIncome(){
            this.errors=[]
            if(this.newname && this.newamount && this.newdescription && this.newfrom){
                let income = {name: this.newname, amount:this.newamount, description:this.newdescription, from:this.newfrom}
                this.$emit('income-added', income)
                this.newname = ''
                this.newamount = ''
                this.newdescription=''
                this.newfrom=''
            }else{
                this.errors.push('All Fields Required')
            }
        }
    }


}
</script>

<style>

</style>
