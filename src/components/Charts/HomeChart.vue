<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: {
    chartdata: {
      type: Object,
      default: null
    }
  },
  mounted () {
    console.log(this.chartdata.data);
    console.log(Object.values(this.chartdata.data));
    
    this.renderChart(
      {
        labels: 
            Object.keys(this.chartdata.data)
        ,
        datasets: [
          {
            label: "Data 1",
            data: Object.values(this.chartdata.data),
            backgroundColor: "transparent",
            borderColor: "rgba(1, 116, 188, 0.50)",
            pointBackgroundColor: "rgba(171, 71, 188, 1)"
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "Casos Por Región"
        }
      }
    );
  }


}
</script>

<style>
</style>