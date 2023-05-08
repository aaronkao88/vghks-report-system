<template>
  <q-card-section
    square
    flat
    style="
      max-width: 1450px;
      background-color: #f7f9ff;
      border-radius: 20px 20px 0 0;
    "
  >
    <div class="text-h6 col q-mt-sm">
      <P style="color: #21468d; font-weight: 600">總覽｜Dashboard</P>
    </div>
  </q-card-section>

  <q-card-section
    class="col"
    square
    flat
    style="
      max-width: 1450px;
      height: 480px;
      background-color: #ffffff;
      border-radius: 0 0 20px 20px;
    "
  >
    <div class="row">
      <div class="col">
        <div class="text-h6 col chart-container">
          <canvas id="myChart" width="300" height="110"></canvas>
        </div>
      </div>
    </div>
  </q-card-section>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  mounted() {
    // SETUP
    const data = {
      labels: ["階段一", "階段二", "階段三", "階段四", "階段五"],
      datasets: [
        {
          label: "收案總數",
          data: [118, 93, 87, 75, 57],
          fill: false,
          backgroundColor: [
            "#FFBFBF",
            "#FFBFBF",
            "#FFBFBF",
            "#FFBFBF",
            "#FFBFBF",
          ],
          borderColor: ["#FFBFBF", "#FFBFBF", "#FFBFBF", "#FFBFBF", "#FFBFBF"],
          borderWidth: 1,
        },
        {
          label: "等待檢驗資料",
          data: [25, 0, 12, 18, 57],
          fill: false,
          backgroundColor: [
            "#FF5C5C",
            "#FF5C5C",
            "#FF5C5C",
            "#FF5C5C",
            "#FF5C5C",
          ],
          borderColor: ["#FF5C5C", "#FF5C5C", "#FF5C5C", "#FF5C5C", "#FF5C5C"],
          borderWidth: 1,
        },
      ],
    };

    // CONFIG
    const config = {
      type: "bar",
      data,
      options: {
        indexAxis: "y",
      },
    };

    // RENDAR
    new Chart(document.getElementById("myChart"), config);
  },
};
</script>

 
 