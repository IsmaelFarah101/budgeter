<template>
<div class="container">
<div class="shadow-lg p-3 mb-5 bg-white rounded">
    <table class="table">
        <div class="form-check">
             <input class="form-check-input" type="checkbox" v-model="editTable" id="deletecheck">
             <label class="form-check-label" for="deletecheck">
              Delete
            </label>
       </div>
        <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Description</th>
            <th>From</th>
            <th v-show="editTable">Delete</th>
        </tr>
        <IncomeRow v-for="income in incomes"
        v-bind:key='income.id'
        v-bind:income='income'
        v-bind:edit="editTable"
        v-on:delete-income="incomeDeleted">

        </IncomeRow>
    </table>
</div>
<div>
</div>
</div>
</template>

<script>
import IncomeRow from '../components/IncomeRow'
export default {
    name:'IncomeTable',
    components:{
    IncomeRow,
    },
    data(){
      return{
          editTable:false
      }  
    },
    props:{
        incomes:Array
    },
    methods:{
        incomeDeleted(income){
            this.$emit('delete-income', income)
        }
    }

}
</script>

<style>

</style>
