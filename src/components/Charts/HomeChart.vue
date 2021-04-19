<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: {
    chartdata: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.renderChart(
        {
          labels: Object.keys(this.chartdata.data).splice(1),
          datasets: [
            {
              label: "Casos Confirmados",
              data: this.getCasos(Object.values(this.chartdata.data).splice(1)),
              backgroundColor: "transparent",
              borderColor: "rgba(1, 116, 188, 0.50)",
              pointBackgroundColor: "rgba(171, 71, 188, 1)",
            },
            {
              label: "Muertes",
              data: this.getFallecidos(
                Object.values(this.chartdata.data).splice(1)
              ),
              backgroundColor: "transparent",
              borderColor: "rgb(225,0,0)",
              pointBackgroundColor: "rgb(0,0,0)",
            },
            {
              label: "Casos Recuperados",
              data: this.getRecuperados(
                Object.values(this.chartdata.data).splice(1)
              ),
              backgroundColor: "transparent",
              borderColor: "rgb(0,128,0)",
              pointBackgroundColor: "rgb(0,128,0)",
            },
          ],
        },
        {
          responsive: true,
          maintainAspectRatio: false,
          title: {
            display: true,
            text: "Casos Por Región",
          },
        }
      );
    },
    getCasos(array) {
      var valores = [];
      for (var i = 0; i < array.length; i += 1) {
        valores.push(array[i].confirmed);
      }
      return valores;
    },
    getFallecidos(array) {
      var valores = [];
      for (var i = 0; i < array.length; i += 1) {
        valores.push(array[i].deaths);
      }
      return valores;
    },
    getRecuperados(array) {
      var valores = [];
      for (var i = 0; i < array.length; i += 1) {
        valores.push(array[i].recovered);
      }
      return valores;
    },
  },
};
</script>

<style>
</style>