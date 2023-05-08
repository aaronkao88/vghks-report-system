<template>
  <div class="patient">
    <div class="row">
      <q-card flat bordered class="my-card-2">
        <q-card-section>
          <div>
            <div class="col-6 col-md-4 text-h6 text-list">
              個案清單
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              搜尋：
              <q-btn-dropdown
                class="col-6 col-md-4"
                id="pg-sd"
                color="white text-black"
                label="病歷號"
              >
                <q-list>
                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-labsel onclick="medicalnum()"
                        >病歷號</q-item-labsel
                      >
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label onclick="idnumber()"
                        >身分證字號</q-item-label
                      >
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </div>

            <!-- 個案清單 -->
            <q-table
              class="my-sticky-header-table"
              :rows="rows"
              :columns="columns"
              title-class="text-bold text-blue-9"
              table-style="background-color: #F7F9FF; color: #21468D;"
              table-header-style="height: 65px; background-color: #D3DEFF; color: #21468D;"
            />
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<style scoped>
.my-card-2 {
  height: 1100px;
  border-radius: 0 0 0 20px;
  border: none;
}
.text-list {
  font-size: 16px;
  font-weight: 700;
  color: #21468d;
  position: relative;
  top: 90px;
}
.text-h6 {
  font-weight: 700;
  margin-left: 40px;
}
.text-allrecevied {
  font-weight: 700;
  font-size: 10px;
  margin-top: 24px;
  margin-right: 15px;
  color: #ff5c5c;
}

thead {
  background-color: #f7f9ff !important;
}
.q-table__container {
  font-weight: 700;
  width: 725px;
  height: 850px;
  margin: 100px 38px;
}

/* 資料清單顏色 */
.tableHeader {
  background-color: #d3deff;
}
</style>

<script>
// API
import { getPatientList } from "@/api/patient";

getPatientList();

const columns = [
  {
    number: "number",
    required: true,
    label: "編號",
    align: "center",
    field: (row) => row.number,
  },
  {
    name: "name",
    required: true,
    align: "left",
    label: "姓名",
    field: (row) => row.name,
  },
  {
    gender: "gender",
    required: true,
    label: "性別",
    align: "center",
    field: (row) => row.gender,
  },
  {
    birth: "birth",
    required: true,
    label: "生日",
    align: "left",
    field: (row) => row.birth,
  },
  {
    identify: "identify",
    required: true,
    label: "身分證字號",
    align: "left",
    field: (row) => row.identify,
  },
  {
    medicalnum: "medicalnum",
    required: true,
    label: "病歷號",
    align: "left",
    field: (row) => row.medicalnum,
  },
  {
    action: "action",
    label: "操作",
  },
];

const rows = [
  {
    number: "1",
    name: "王大明",
    gender: "男",
    birth: "1995/04/02",
    identify: "A123456789",
    medicalnum: "540324",
  },
  {
    number: "2",
    name: "王大明",
    gender: "男",
    birth: "1995/04/02",
    identify: "A123456789",
    medicalnum: "540324",
  },
  {
    number: "3",
    name: "王大明",
    gender: "男",
    birth: "1995/04/02",
    identify: "A123456789",
    medicalnum: "540324",
  },
  {
    number: "4",
    name: "王大明",
    gender: "男",
    birth: "1995/04/02",
    identify: "A123456789",
    medicalnum: "540324",
  },
  {
    number: "5",
    name: "王大明",
    gender: "男",
    birth: "1995/04/02",
    identify: "A123456789",
    medicalnum: "540324",
  },
  {
    number: "6",
    name: "王大明",
    gender: "男",
    birth: "1995/04/02",
    identify: "A123456789",
    medicalnum: "540324",
  },
  {
    number: "7",
    name: "王大明",
    gender: "男",
    birth: "1995/04/02",
    identify: "A123456789",
    medicalnum: "540324",
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
    