<template>
<div>
    <Income id='components'></Income>
    <Savings id='components'></Savings>
    <Bills id='components'></Bills>
    
</div>
</template>

<script>
import Income from '../components/Income'
import Bills from '../components/Bills'
import Savings from '../components/Savings'
export default {
    name:'Main',
    components:{
        Income,
        Bills,
        Savings
    }
}
</script>

<style>
#components{
    margin-top: 5pc;
    margin-bottom: 5pc
}
</style>
