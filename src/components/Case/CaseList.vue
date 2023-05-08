<template>
  <div class="patient">
    <q-card flat bordered class="my-card-2">
      <q-card-section>
        <div>
          <div class="text-h6 text-list">
            案件清單
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            搜尋：
            <q-btn-dropdown
              id="pg-sd"
              style="color: #21468d; background-color: #f7f9ff"
              label="病歷號"
            >
              <q-list>
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-labsel style="color: #21468d">病歷號</q-item-labsel>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label style="color: #21468d"
                      >身分證字號</q-item-label
                    >
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>

          <!-- 個案清單 -->
          <q-table
            :rows="rows"
            :columns="columns"
            row-key="name"
            v-model:pagination="pagination"
            title-class="text-bold text-blue-9"
            table-style="background-color: #F7F9FF; color: #21468D;"
            table-header-style="height: 65px; background-color: #D3DEFF; color: #21468D;"
          />
        </div>
      </q-card-section>
    </q-card>
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
  height: 850px;
  margin: 100px 38px;
  font-weight: 700;
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
import { ref } from "vue";
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
    medicalnum: "medicalnum",
    required: true,
    align: "left",
    label: "病歷號",
    field: (row) => row.medicalnum,
  },
  {
    name: "name",
    required: true,
    label: "姓名",
    align: "center",
    field: (row) => row.name,
  },
  {
    item: "item",
    required: true,
    label: "健檢類別",
    align: "left",
    field: (row) => row.item,
  },
  {
    status: "status",
    required: true,
    label: "目前進度",
    align: "left",
    field: (row) => row.status,
  },
  {
    action: "action",
    label: "操作",
  },
];

const rows = [
  {
    number: "1",
    medicalnum: "650372",
    name: "王大明",
    item: "A套餐",
    status: "5: 資料準備完成",
  },
  {
    number: "2",
    medicalnum: "650372",
    name: "王大明",
    item: "A套餐",
    status: "5: 資料準備完成",
  },
  {
    number: "3",
    medicalnum: "650372",
    name: "王大明",
    item: "A套餐",
    status: "5: 資料準備完成",
  },
  {
    number: "4",
    medicalnum: "650372",
    name: "王大明",
    item: "A套餐",
    status: "5: 資料準備完成",
  },
  {
    number: "5",
    medicalnum: "650372",
    name: "王大明",
    item: "A套餐",
    status: "5: 資料準備完成",
  },
  {
    number: "6",
    medicalnum: "650372",
    name: "王大明",
    item: "A套餐",
    status: "5: 資料準備完成",
  },
  {
    number: "7",
    medicalnum: "650372",
    name: "王大明",
    item: "A套餐",
    status: "5: 資料準備完成",
  },
];

export default {
  setup() {
    return {
      columns,
      rows,
      search: ref(""),
    };
  },
};
</script>
    