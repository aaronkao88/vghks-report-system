<template>
  <div class="patient">
    <div class="text-h6 patienttext">個案資訊</div>
    <q-card dark bordered class="my-card-3">
      <div class="q-pa-md items-start q-gutter-md">
        <div class="col">
          <q-card-section class="patientinfo">
            <div class="row">
              <div class="col-4">
                <div class="text-weight-bold personid">王大明</div>
              </div>

              <div class="col-8">
                <p class="text-weight-regular gender">男 34 歲</p>
              </div>

              <!-- 更多資訊 -->
              <div class="col-8 PersonInfo">
                <!-- 病歷號 -->
                <div class="row">
                  <div class="col">
                    <p class="text-weight-regular">病歷號</p>
                  </div>
                  <div class="col">
                    <p class="text-weight-regular">540324</p>
                  </div>
                </div>
                <!-- 身分證字號 -->
                <div class="row">
                  <div class="col">
                    <p class="text-weight-regular">身分證字號</p>
                  </div>
                  <div class="col">
                    <p class="text-weight-regular">A12345789</p>
                  </div>
                </div>
                <!-- 生日 -->
                <div class="row">
                  <div class="col">
                    <p class="text-weight-regular">生日</p>
                  </div>
                  <div class="col">
                    <p class="text-weight-regular">1998/03/03</p>
                  </div>
                </div>

                <div class="patientdata">
                  <div class="datatitle">個案資訊</div>
                  <q-table
                    :rows="rows"
                    :columns="columns"
                    row-key="name"
                    v-model:pagination="pagination"
                    title-class="text-bold text-blue-9"
                    table-style="background-color: #FFFFFF; color: #21468D;"
                    table-header-style=" background-color: #D3DEFF; color: #21468D;"
                  />
                </div>
              </div>
            </div>
          </q-card-section>

          <q-card-section> </q-card-section>
        </div>
      </div>
    </q-card>
  </div>
</template>

<style scoped>
/* 個案資訊卡 */
.patient {
  margin: 117px 80px;
}
.my-card-3 {
  width: 50px;
  margin: 20px 0;
  border: none;
}

/* 個案資訊 */
.patienttext {
  position: relative;
  font-weight: 700;
  font-size: 16px;
  color: #21468d;
}
.q-dark {
  width: 795px;
  height: 850px;
  font-weight: 700;
  color: #21468d;
  background-color: #f7f9ff;
}
.gender {
  position: relative;
  top: 8px;
}
.patientinfo {
  margin: 0px 70px;
  font-size: 14px;
}
.personid {
  font-size: 26px;
}
.gender {
  position: relative;
  top: 8px;
  right: 70px;
  font-size: 18px;
}
.PersonInfo {
  margin: 70px 0;
}

/* 個案資訊清單 */
.patientdata {
  margin: 80px 0;
}
.datatitle {
  font-weight: 700;
  margin: 0 40px;
  font-size: 16px;
  color: #21468d;
}
/* 資料清單 */
thead {
  background-color: #f7f9ff !important;
}
.q-table__container {
  margin: 20px auto;
  width: 620px;
  height: 381px;
  background-color: #f7f9ff;
}
.q-table thead,
.q-table tr,
.q-table th,
.q-table td {
  font-weight: 700;
  color: #21468d !important;
  background-color: #d3deff !important;
}
</style>

<script>
const columns = [
  {
    medicalnum: "medicalnum",
    required: true,
    label: "案件編號",
    align: "center",
    field: (row) => row.medicalnum,
  },
  {
    itemdate: "itemdate",
    required: true,
    align: "left",
    label: "健檢日期",
    field: (row) => row.itemdate,
  },
  {
    item: "item",
    required: true,
    label: "健檢項目",
    align: "center",
    field: (row) => row.item,
  },
  {
    status: "status",
    required: true,
    label: "目前進度",
    align: "left",
    field: (row) => row.status,
  },
];

const rows = [
  {
    medicalnum: "540324",
    itemdate: "1995/04/02",
    item: "A套餐",
    status: "5:資料準備完成",
  },
  {
    medicalnum: "540324",
    itemdate: "1995/04/02",
    item: "勞工健檢",
    status: "5:資料準備完成",
  },
  {
    medicalnum: "540324",
    itemdate: "1995/04/02",
    item: "B套餐",
    status: "3: 等待健檢中心整合報告",
  },
  {
    medicalnum: "540324",
    itemdate: "1995/04/02",
    item: "勞工健檢",
    status: "2: 等待風險評估報告",
  },
  {
    medicalnum: "540324",
    itemdate: "1995/04/02",
    item: "A套餐",
    status: "1: 等待檢驗資料",
  },
  {
    medicalnum: "540324",
    itemdate: "1995/04/02",
    item: "A套餐",
    status: "1: 等待檢驗資料",
  },
];

export default {
  setup() {
    return {
      columns,
      rows,
    };
  },
};
</script>