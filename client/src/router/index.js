import Router from 'vue-router'
import Metric from '../components/Metric'
import Main from '../components/Main'
export default new Router({
    routes:[
    {
        path:'/',
        component:Main
    },
    {
        path:'/metrics',
        component: Metric
    },
    ]
})