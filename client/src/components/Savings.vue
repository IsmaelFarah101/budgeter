<template>
<div class='container'>
<b-button v-b-modal.savings-modal variant="primary">Add Savings</b-button>
<div class='row'>
    <div class=col-8><SavingsTable v-bind:savings='savings' v-on:delete-savings='savingsDeleted'></SavingsTable></div>
    <div class='col-4'><Total v-bind:data='savings' v-bind:name='name'></Total></div>
</div>
<b-modal id="savings-modal" size="lg" title="Add Income">
    <SavingsAdd v-on:savings-added='newSavingsAdded'></SavingsAdd>
</b-modal>
</div>
</template>

<script>
import SavingsTable from '@/components/SavingsTable'
import Total from '@/components/Total'
import SavingsAdd from '@/components/SavingsAdd'
export default {
    name:'Savings',
    components:{
        SavingsTable,
        Total,
        SavingsAdd
    },
    data(){
        return{
            savings:[],
            name:'Total Savings',         
        }
    },
    mounted(){
        this.updateSavings()
    },
    methods:{
        newSavingsAdded(savings){
            this.$finance_api.addSavings(savings).then(() => {
                this.updateSavings()
            })
        },
        savingsDeleted(savings){
            this.$finance_api.deleteSavings(savings.id).then(() => {
                this.updateSavings()
            })
        },
        updateSavings(){
            this.$finance_api.getAllSavings().then(data => {
                this.savings = data
            })

        }
    }
}
</script>

<style>

</style>
