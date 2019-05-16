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
                <th v-show='editTable'>Delete</th>
            </tr>
            <SavingsRow v-for='saving in savings'
            v-bind:key='saving.id'
            v-bind:savings='saving'
            v-bind:edit='editTable'
            v-on:delete-savings='savingsDeleted'
            >
            </SavingsRow>

        </table>
    </div>
    </div>
</template>

<script>
import SavingsRow from '../components/SavingsRow'

export default {
    name:'SavingsTable',
    components:{
        SavingsRow
    },
    data(){
        return{
            editTable:false
        }
    },
    props:{
        savings:Array
    },
    methods:{
        savingsDeleted(savings){
            this.$emit('delete-savings', savings)
        }
    }

}
</script>

<style>

</style>
