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
    console.log(this.chartdata);
    //this.fillData();
  },
  methods: {
    fillData() {
      this.renderChart(
        {
          labels: Object.keys(this.chartdata.data),
          datasets: [
            {
              label: "Casos Confirmados",
              data: Object.values(this.chartdata).splice(1),
              backgroundColor: "transparent",
              borderColor: "rgba(1, 116, 188, 0.50)",
              pointBackgroundColor: "rgba(171, 71, 188, 1)",
            },
          ],
        },
        {
          responsive: true,
          maintainAspectRatio: false,
        }
      );
    },
  },
};
</script>

<style>
</style>