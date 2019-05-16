<template>
    <div>
        <div class='container'>
        <b-button v-b-toggle.income-chart class="m-1">Income</b-button>
        <b-collapse visible id="income-chart">
            <b-card><IncomeChart></IncomeChart></b-card>
        </b-collapse>
        </div>
       <div class='container'>
        <b-button v-b-toggle.savings-chart class="m-1">Income</b-button>
        <b-collapse visible id="savings-chart">
            <b-card><SavingsChart></SavingsChart></b-card>
        </b-collapse>
        </div>
        <div class='container'>
        <b-button v-b-toggle.bills-chart class="m-1">Income</b-button>
        <b-collapse visible id="bills-chart">
            <b-card><BillsChart></BillsChart></b-card>
        </b-collapse>
        </div>
</div>
</template>

<script>
import IncomeChart from '../components/IncomeChart'
import SavingsChart from '../components/SavingsChart'
import BillsChart from '../components/BillsChart'
export default {
    name:'Metric',
    components:{
        IncomeChart,
        SavingsChart,
        BillsChart
    },
}
</script>

<style>

</style>
