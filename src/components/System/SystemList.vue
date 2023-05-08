<template>
  <div class="patient">
    <q-card flat bordered class="col my-card-2">
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
            class="col-6"
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
.q-table__container {
  margin: 100px 38px;
  font-weight: 700;
}
</style>

<script>
import { ref } from "vue";
// API
import { getPatientList } from "@/api/patient";

getPatientList();

const columns = [
  {
    operator: "operator",
    required: true,
    label: "操作者",
    align: "center",
    field: (row) => row.operator,
  },
  {
    operater: "operater",
    required: true,
    label: "",
    align: "center",
    field: (row) => row.operater,
  },
  {
    operatetime: "operatetime",
    required: true,
    align: "left",
    label: "操作時間",
    field: (row) => row.operatetime,
  },
  {
    caseid: "caseid",
    required: true,
    label: "CASE ID",
    align: "center",
    field: (row) => row.caseid,
  },
  {
    operateitem: "operateitem",
    required: true,
    label: "操作類別",
    align: "left",
    field: (row) => row.operateitem,
  },
  {
    operateitem1: "operateitem1",
    required: true,
    label: "",
    align: "left",
    field: (row) => row.operateitem1,
  },
  {
    action: "action",
    label: "操作",
  },
];

const rows = [
  {
    operator: "HIS",
    operater: "user01",
    operatetime: "1995/04/02",
    caseid: "540324",
    operateitem: "檔案上傳",
    operateitem1: "摘要摘要",
    status: "3: 等待整合健檢中心整合報告",
  },
  {
    operator: "浚鴻",
    operater: "user01",
    operatetime: "1995/04/02",
    caseid: "540324",
    operateitem: "檔案下載",
    operateitem1: "摘要摘要",
    status: "3: 等待整合健檢中心整合報告",
  },
  {
    operator: "健檢中心",
    operater: "user01",
    operatetime: "1995/04/02",
    caseid: "540324",
    operateitem: "進度更新",
    operateitem1: "摘要摘要",
    status: "3: 等待整合健檢中心整合報告",
  },
  {
    operator: "勝典",
    operater: "user01",
    operatetime: "1995/04/02",
    caseid: "540324",
    operateitem: "資料同步",
    operateitem1: "摘要摘要",
    status: "3: 等待整合健檢中心整合報告",
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
