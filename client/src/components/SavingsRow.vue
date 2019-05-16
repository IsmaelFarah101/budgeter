<template>
    <tr class='savings-row'>
        <td>{{savings.name}}</td>
        <td>{{savings.amount | dollar}}</td>
        <td>{{savings.description}}</td>
        <td v-show='edit'>
            <button class='btn btn-warning' v-on:click='deletesavings(savings)'>Delete</button>
        </td>
    </tr>
</template>

<script>
export default {
    name:'SavingsRow',
    props:{
        savings:Object,
        edit:Boolean
    },
    methods:{
        deletesavings(savings){
            if(confirm(`Do you want to delete ${savings.name}`)){
                this.$emit('delete-savings', savings)
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
