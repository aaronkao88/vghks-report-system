<template>
  <div class="col">
    <div class="system">
      <div class="text-h6 systemtext">案件資訊</div>
      <q-card dark bordered class="my-card-3">
        <div class="q-pa-md q-gutter-md">
          <q-card-section class="systempersoninfo">
            <div class="row">
              <div class="col">
                <div class="text-weight-bold systemid">王大明</div>
              </div>

              <div class="col-5">
                <div class="text-weight-blod gender">男&nbsp;&nbsp;34歲</div>
              </div>

              <div class="col">
                <q-btn
                  unelevated
                  rounded
                  color="primary"
                  label="查看所有案件"
                />
                <q-btn
                  unelevated
                  rounded
                  class="q-mt-lg"
                  color="primary"
                  label="查看此筆案件"
                />
              </div>

              <!-- 更多資訊 -->
              <div class="col-8 systemInfo">
                <!-- 目前進度 -->
                <div class="row">
                  <div class="col">
                    <div class="text-weight-bold nowstep">目前進度</div>
                  </div>
                  <div class="col">
                    <div class="text-weight-bold nowstepstatus">
                      1 等待檢驗資料
                    </div>
                  </div>
                </div>
                <!-- 健檢類別 -->
                <div class="row">
                  <div class="col">
                    <div class="text-weight-light systeminfo">健檢類別</div>
                  </div>
                  <div class="col">
                    <div class="text-weight-bold systeminfo">A套餐</div>
                  </div>
                </div>
                <!-- system ID -->
                <div class="row">
                  <div class="col">
                    <div class="text-weight-light systeminfo">system ID</div>
                  </div>
                  <div class="col">
                    <div class="text-weight-bold systeminfo">650372</div>
                  </div>
                </div>
                <!-- 健檢日期 -->
                <div class="row">
                  <div class="col">
                    <div class="text-weight-light systeminfo">健檢日期</div>
                  </div>
                  <div class="col">
                    <div class="text-weight-bold systeminfo">2022/08/23</div>
                  </div>
                </div>
                <!-- 最後更新日期 -->
                <div class="row">
                  <div class="col">
                    <div class="text-weight-light systeminfo">最後更新日期</div>
                  </div>
                  <div class="col">
                    <div class="text-weight-bold systeminfo">2022/08/23</div>
                  </div>
                </div>

                <!-- 操作紀錄 -->
                <div class="stephistroy">
                  <div class="text-h6 systemtext">操作紀錄</div>

                  <!-- 記錄清單 -->
                  <q-table
                    :rows="rows"
                    :columns="columns"
                    row-key="name"
                    v-model:pagination="pagination"
                    title-class="text-bold text-blue-9"
                    table-style="background-color: #FFFFFF; color: #21468D;"
                    table-header-style="height: 65px; background-color: #D3DEFF; color: #21468D;"
                  />
                </div>
              </div>
            </div>
          </q-card-section>
        </div>
      </q-card>
    </div>
  </div>
</template>

<style scoped>
/* 案件資訊卡訊卡 */
.system {
  margin: 117px 80px;
}
.systemInfo {
  position: relative;
  top: 70px;
}
.systempersoninfo {
  margin: 0px 70px;
  font-size: 12px;
}
.my-card-3 {
  width: 50px;
  margin: 20px 0;
  border: none;
}

/* 案件資訊內容 */
.systemtext {
  font-weight: 700;
  font-size: 16px;
  color: #21468d;
}
.q-dark {
  width: 795px;
  height: 850px;
  color: #21468d;
  background-color: #f7f9ff;
}
.gender {
  position: relative;
  right: 70px;
  top: 8px;
}
.systemid {
  font-size: 26px;
}
.gender {
  font-size: 18px;
}
.nonupdate {
  color: #000000;
}
.nowstep {
  font-size: 18px;
}
.nowstepstatus {
  position: relative;
  top: 2px;
  font-size: 14px;
}
.systeminfo {
  font-size: 14px;
  top: 10px;
  position: relative;
  margin: 5px 0;
  color: #21468d;
}
.stepdata {
  margin: 0 50px;
}

/* 分割線 */
.q-separator--horizontal-inset {
  width: 270px;
  border: 1px solid #21468d;
  background-color: #21468d;
  margin: 50px 0;
}

/* 案件資訊清單 */
.systemdata {
  margin: 80px 0;
}
.datatitle {
  margin: 0 20px;
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
  height: 281px;
  background-color: #f7f9ff;
}
/* 操作紀錄 */
.stephistroy {
  margin: 40px 0;
}
/* 按鈕 */
.bg-primary {
  top: 5px;
  background: #21468d !important;
}
</style>

<script>
import { ref } from "vue";

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
    operateitem: "operateitem",
    required: true,
    label: "操作類別",
    align: "left",
    field: (row) => row.operateitem,
  },
  {
    operateitem1: "operateitem1",
    required: true,
    label: "摘要",
    align: "left",
    field: (row) => row.operateitem1,
  },
];

const rows = [
  {
    operator: "HIS",
    operater: "user01",
    operatetime: "1995/04/02 15:30:03",
    operateitem: "檔案上傳",
    operateitem1: "摘要摘要",
    status: "3: 等待整合健檢中心整合報告",
  },
  {
    operator: "浚鴻",
    operater: "user01",
    operatetime: "1995/04/02 15:30:03",
    operateitem: "檔案下載",
    operateitem1: "摘要摘要",
    status: "3: 等待整合健檢中心整合報告",
  },
  {
    operator: "健檢中心",
    operater: "user01",
    operatetime: "1995/04/02 15:30:03",
    operateitem: "進度更新",
    operateitem1: "摘要摘要",
    status: "3: 等待整合健檢中心整合報告",
  },
  {
    operator: "勝典",
    operater: "user01",
    operatetime: "1995/04/02 15:30:03",
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
      

