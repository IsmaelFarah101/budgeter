<template>
    <tr class="income-row">
        <td>{{income.name}}</td>
        <td>{{income.amount | dollar}}</td>
        <td>{{income.description}}</td>
        <td>{{income.from}}</td>
        <td v-show="edit">
            <button class="btn btn-warning" v-on:click="deleteincome(income)">Delete</button>
        </td>
    </tr>
</template>

<script>
export default {
    name:'IncomeRow',
    props:{
        income:Object,
        edit:Boolean
    },
    methods:{
        deleteincome(income){
            if(confirm(`Do you wan to delete ${income.id}`)){
                this.$emit('delete-income', income)
            }
        }
    },
    filters:{
        dollar:function(amount){
            
        return "$ " + amount.toFixed(2)
        }
}
}
</script>

<style>

</style>
