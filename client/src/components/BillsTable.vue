<template>
<div class='container'>
<div class='shadow-lg p-3 mb-5 bg-white rounded'>
    <table class='table'>
        <div class='form-check'>
            <input class='form-check-input' type='checkbox' v-model='editTable' id='deletecheck'>
            <label class='form-check-label' for='deletecheck'>
                Delete
            </label>
        </div>
        <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Description</th>
            <th>Paid</th>
            <th v-show='editTable'>Delete</th>
        </tr>
        <BillsRow v-for='bill in bills'
        v-bind:key='bill.id'
        v-bind:bills='bill'
        v-bind:edit='editTable'
        v-on:delete-bills='billsDeleted'
        v-on:isPaid='updateBillPaid'
        >

        </BillsRow>
    </table>
</div>
</div>
    
</template>

<script>
import BillsRow from '../components/BillsRow'
export default {
    name:'BillsTable',
    components:{
        BillsRow
    },
    data(){
        return{
            editTable:false
        }
    },
    props:{
        bills:Array
    },
    methods:{
        billsDeleted(bills){
            this.$emit('delete-bills', bills)
        },
          updateBillPaid(billid, billpaid){
        this.$finance_api.updateBill(billid, billpaid).then(data => {
            
        })
    }
    },
  

}
</script>

<style>

</style>
