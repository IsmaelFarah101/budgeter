<script>
  //Importing Bar class from the vue-chartjs wrapper
  import { Bar } from 'vue-chartjs'
import { setTimeout } from 'timers';
  //Exporting this so it can be used in other components
  export default {
    extends: Bar,
    data () {
      return {
        datacollection: {
          //Data to be represented on x-axis
          labels: [],
          datasets: [
            {
              label: 'Income',
              backgroundColor: '#f87979',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#249EBF',
              //Data to be represented on y-axis
              data:[]
            }
          ]
        },
        //Chart.js options that controls the appearance of the chart
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [ {
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    computed:{
        },
    methods:{
        getData(){
            this.$finance_api.getAllBills().then(data => {
            data.forEach(element => {
                console.log(element)
                this.datacollection.labels.push(element.name)
                this.datacollection.datasets[0].data.push(element.amount)
            });
            })
        },
        getChart(){
            setTimeout( () => {
                this.renderChart(this.datacollection, this.options)
            }, 1000)
        }
        },
    mounted () {
      //renderChart function renders the chart with the datacollection and options object.
      this.getData()
      this.getChart()
      
    }
  }
</script>