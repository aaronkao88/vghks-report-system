<template>
  <div class="patienttitle">
    <q-card flat bordered class="my-card">
      <!-- 系統紀錄｜System log -->
      <q-card-section>
        <div class="text-h6">系統紀錄｜System log</div>
      </q-card-section>
    </q-card>
  </div>
</template>


<style scoped>
.pg_sh {
  width: 100%;
  border-radius: 20px 0 20px 20px;
}
.my-card {
  margin: 45px 0 0 0;
  border-radius: 20px 20px 0 0;
  background-color: #f7f9ff;
  border: none;
}
.text-h6 {
  font-weight: 700;
  color: #21468d;
  margin-left: 40px;
}
.text-allrecevied {
  font-size: 10px;
  margin-top: 24px;
  margin-right: 15px;
  color: #ff5c5c;
}

thead {
  background-color: #d3deff !important;
}
.q-table__container {
  margin: 20px 40px;
  display: block;
  width: 625px;
  height: 880px;
  background-color: #e0eaff;
}
</style>