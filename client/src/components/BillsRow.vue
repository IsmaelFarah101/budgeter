<template>
    <tr class='bills-row'>
        <td>{{bills.name}}</td>
        <td>{{bills.amount | dollar}}</td>
        <td>{{bills.description}}</td>
        <td><input id='paid' type='checkbox' v-model='billpaid' v-on:change="$emit('isPaid',billid, billpaid)"></td>
        <td v-show='edit'>
        <button class='btn btn-warning' v-on:click='deleteBills(bills)'>Delete</button>

        </td>
    </tr>
</template>

<script>
export default {
    name:'BillsRow',
    props:{
        bills:Object,
        edit:Boolean
    },
    data(){
        return{
            billpaid: this.bills.paid,
            billid: this.bills.id
        }
    },
    methods:{
        deleteBills(bills){
            if(confirm(`Do you want to delete ${bills.name}`)){
                this.$emit('delete-bills', bills)
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
