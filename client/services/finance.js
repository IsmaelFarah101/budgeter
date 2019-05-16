import axios from 'axios'

const bills_url = '/api/bills'
const income_url = '/api/income'
const saving_url = '/api/savings'

export default{
    getAllBills(){
        return axios.get(bills_url).then(response => {
            return response.data
        })

    },
    addBill(bill){
        return axios.post(bills_url,bill).then( response => {
            return response.data
        })
    },
    deleteBill(id){
        return axios.delete(`${bills_url}/${id}`).then(response => {
            return response.data
        })
    },
    updateBill(billid, billpaid){
        return axios.patch(`${bills_url}/` + billid,{paid:billpaid}).then(response =>{
            return response.data
        })
    },
    getAllIncome(){
        return axios.get(income_url).then(response => {
            return response.data
        })
    },
    addIncome(newincome){
        return axios.post(income_url, newincome).then(response => {
            return response.data
        })
    },
    deleteIncome(id){
        return axios.delete(`${income_url}/${id}`).then(response =>{
            return response.data    
        })
    },
    getAllSavings(){
        return axios.get(saving_url).then(response => {
            return response.data    
        })
    },
    addSavings(newsaving){
        return axios.post(saving_url, newsaving).then(response => {
            return response.data
        })
    },
    deleteSavings(id){
        return axios.delete(`${saving_url}/${id}`).then(response => {
            return response.data
        })
    }

}