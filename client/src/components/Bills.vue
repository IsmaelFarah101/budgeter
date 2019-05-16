<template>
<div class='container'>
    <b-button v-b-modal.bill-modal variant="primary">Add Bill</b-button>
    <div class='row'>
        <div class='col-8'><BillsTable v-bind:bills="bills" v-on:delete-bills="billsDeleted"></BillsTable></div>
        <div class='col-4'><Total v-bind:data='bills' v-bind:name='name'></Total></div>
    </div>
    <b-modal id="bill-modal" size="lg" title="Add Bill">
    <BillsAdd v-on:bill-added='newBillAdded'></BillsAdd>
    </b-modal>

</div>   
</template>

<script>
import BillsTable from '@/components/BillsTable'
import Total from '@/components/Total'
import BillsAdd from '@/components/BillsAdd'
export default {
    name:'Bills',
    components:{
        BillsTable,
        Total,
        BillsAdd
    },
    data(){
        return{
            bills:[],
            name:'Total Bills'
        }
    },
    mounted(){
        this.updateBills()
    },
    methods:{
         newBillAdded(bill){
            this.$finance_api.addBill(bill).then(() => {
                this.updateBills()
            }).catch(err => {
                let errormsg = err.response.data.join(',')
                alert('Error adding bill.\n ' + errormsg)
            })
        },
        billsDeleted(bills){
            this.$finance_api.deleteBill(bills.id).then(() =>{
                this.updateBills()
            })
        },
        updateBills(){
            this.$finance_api.getAllBills().then(data => {
                this.bills = data
            })
        }
    }

}
</script>

<style>

</style>
