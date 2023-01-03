<template>
  <div color="background">
    <div class="tw-shadow-lg py-5 px-6">
      <div
        dense
        elevation="0"
        color="transparent text--text"
        class="mb-4 mt-0 ml-2 d-flex justify-start align-center"
        width="46%"
      >
        <span
          class="font-bold text-xs mr-2 line-height-none tw-w-24"
        >
          Asset Value
        </span>
        <input
          class="ml-n1 font-semibold text-sm pt-2 pl-2 pb-2"
          :placeholder="units"
          :disabled="true"
          background-color="background"
        />
        <input
          class="ml-2 font-semibold text-sm pt-2 pl-2 pb-2"
          :placeholder="sqft"
          :disabled="true"
          background-color="background"
        />
      </div>

      <div v-if="loading" height="40"></div>
      <apexcharts
        ref="chart"
        height="350"
        type="area"
        class="mt-n16"
        :options="chart.chartOptions"
        :series="chart.series"
      ></apexcharts>
    </div>
  </div>
</template>

<script>
// import VueApexCharts from "vue-apexcharts";
import VueApexCharts from "vue3-apexcharts";
import moment from "moment";

export default {
  name: "OverviewChart",
  components: {
    apexcharts: VueApexCharts,
  },
  props: {
    statistics: {
      type: [Array, Object],
      required: false,
    },
    sqft: {
      type: [String, Number],
      default: 0,
    },
    units: {
      type: [String, Number],
      default: 0,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    chart: {
      chartOptions: {
        chart: {
          id: "basic-bar",
          toolbar: {
            show: false,
          },
        },
        title: {
          text: "",
          floating: true,
          style: {
            fontSize: "14px",
            fontWeight: "bold",
            fontFamily: "Sofia Pro",
            color: "#0F0D36",
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "24%",
            borderRadius: 2,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 1,
          colors: ["transparent"],
        },
        yaxis: {
          labels: {
            formatter: (val) => {
              val = val / 1000;
              return "" + parseFloat(val).toFixed(0) + "K";
            },
          },
          title: {
            text: "Amount ($)",
            style: {
              fontSize: "14px",
              fontWeight: "600",
              fontFamily: "Sofia Pro",
              color: "#0F0D36",
            },
          },
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          // inverseOrder: true,
          x: {
            formatter: undefined,
          },
          y: {
            formatter: function (val) {
              // console.log(val);
              return " $" + parseFloat(val).toFixed(0);
            },
            // formatter: function (value, { series, seriesIndex, dataPointIndex, w }) {
            //   console.log(series);
            //   console.log(seriesIndex);
            //   console.log(dataPointIndex);
            //   console.log(w);
            //   return value | currency('$');
            // },
          },
        },
        colors: ["#19BFB4", "#645CFC", "#FC5CDC", "#02B814", "#E9DC29"],
        legend: {
          show: true,
          showForSingleSeries: true,
          position: "top",
          horizontalAlign: "right",
          itemMargin: {
            horizontal: 15,
            vertical: 20,
          },
        },
      },
      series: [],
    },
    formData: {
      yearFilter: [0],
    },
    sampleChart: [
      {
        asset_value: 4498367.659539057,
        cashflow: 4872.906666666668,
        date: "2022-01-01",
        debt: 3158793.36,
        equity: 1339574.2995390568,
        revenue: 31815.2,
      },
      {
        asset_value: 4571888.94975431,
        cashflow: 4320.744722222224,
        date: "2022-02-01",
        debt: 3158387.96,
        equity: 1413500.9897543096,
        revenue: 31069.615000000005,
      },
      {
        asset_value: 4645411.026708994,
        cashflow: 6209.133611111113,
        date: "2022-03-01",
        debt: 2978276.19,
        equity: 1667134.8367089941,
        revenue: 31896.8675,
      },
      {
        asset_value: 4718933.891702475,
        cashflow: 7738.246666666668,
        date: "2022-04-01",
        debt: 2972946.09,
        equity: 1745987.8017024754,
        revenue: 32506.561666666672,
      },
      {
        asset_value: 4792457.546036266,
        cashflow: 8257.757222222222,
        date: "2022-05-01",
        debt: 2967597.98,
        equity: 1824859.5660362656,
        revenue: 33410.519166666665,
      },
      {
        asset_value: 4840168.5948,
        cashflow: 9396.433611111112,
        date: "2022-06-01",
        debt: 2962231.78,
        equity: 1877936.8148000003,
        revenue: 34139.2975,
      },
      {
        asset_value: 4913651.198805009,
        cashflow: 9220.52333333333,
        date: "2022-07-01",
        debt: 2956847.4400000004,
        equity: 1956803.758805009,
        revenue: 35068.4925,
      },
      {
        asset_value: 4987134.525656029,
        cashflow: 9740.573888888886,
        date: "2022-08-01",
        debt: 2951444.9,
        equity: 2035689.6256560287,
        revenue: 36005.83833333334,
      },
      {
        asset_value: 5060618.576546899,
        cashflow: 10726.792777777777,
        date: "2022-09-01",
        debt: 2946024.08,
        equity: 2114594.496546899,
        revenue: 37310.67083333334,
      },
      {
        asset_value: 5134103.352673429,
        cashflow: 10408.596666666666,
        date: "2022-10-01",
        debt: 2940584.93,
        equity: 2193518.422673429,
        revenue: 35208.154166666674,
      },
      {
        asset_value: 5207588.855233407,
        cashflow: 9941.170555555556,
        date: "2022-11-01",
        debt: 2935127.4,
        equity: 2272461.4552334067,
        revenue: 32869.60916666667,
      },
      {
        asset_value: 5281075.085426595,
        cashflow: 9285.68611111111,
        date: "2022-12-01",
        debt: 2929651.4,
        equity: 2351423.6854265947,
        revenue: 29852.396666666667,
      },
      {
        asset_value: 5354562.044454738,
        cashflow: 8664.5975,
        date: "2023-01-01",
        debt: 2924156.89,
        equity: 2430405.1544547374,
        revenue: 27167.53666666667,
      },
    ],
  }),
  created() {
    this.setData(JSON.parse(JSON.stringify(this.sampleChart)));
  },
  watch: {
    statistics: function (data) {
      console.log(data);
      this.setData(data);
    },
  },
  methods: {
    setData(statistics) {
      console.log(statistics);
      let assetValues = [];
      let cashflows = [];
      let debts = [];
      let equities = [];
      let revenues = [];
      let labels = [];
      for (const statistic of statistics) {
        assetValues.push(statistic.asset_value || 0);
        cashflows.push(statistic.cashflow || 0);
        debts.push(statistic.debt || 0);
        equities.push(statistic.equity || 0);
        revenues.push(statistic.revenue || 0);
        labels.push(moment(statistic.date).format("MMM YYYY"));
      }

      this.chart.chartOptions = {
        labels: labels,
      };

      this.chart.series = [
        { name: "Asset Value", data: assetValues },
        { name: "Cash flow", data: cashflows },
        { name: "Debt", data: debts },
        { name: "Equity", data: equities },
        { name: "Income", data: revenues },
      ];

      /* this.$refs.chart.updateSeries([
        { name: 'Asset Value', data: assetValues },
        { name: 'Cash flow', data: cashflows },
        { name: 'Debt', data: debts },
        { name: 'Equity', data: equities },
        { name: 'Income', data: revenues },
      ]); */


    },
  },
};
</script>
<style scoped>
* >>> .apexcharts-legend {
  /* margin-top: -10px !important; */
  /* position: fixed !important;
  width: 60%;
  margin-left: 40%; */
}
</style>
