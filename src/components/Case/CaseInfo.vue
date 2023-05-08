<template>
  <div class="case">
    <div class="text-h6 casetext">案件資訊</div>
    <q-card dark bordered class="my-card-3">
      <div class="q-pa-md q-gutter-md">
        <q-card-section class="casepersoninfo">
          <div class="row">
            <div class="col">
              <div class="text-weight-bold Caseid">王大明</div>
            </div>

            <div class="col-5">
              <div class="text-weight-blod gender">男&nbsp;&nbsp;34歲</div>
            </div>

            <div class="col">
              <q-btn unelevated rounded color="primary" label="查看所有案件" />
            </div>

            <!-- 更多資訊 -->
            <div class="col-8 CaseInfo">
              <!-- 目前進度 -->
              <div class="row">
                <div class="col">
                  <div class="text-weight-bold nowstep">目前進度</div>
                </div>
                <div class="col">
                  <div class="text-weight-bold nowonstep">1 等待檢驗資料</div>
                </div>
              </div>
              <!-- 健檢類別 -->
              <div class="row">
                <div class="col">
                  <div class="text-weight-light caseinfo">健檢類別</div>
                </div>
                <div class="col">
                  <div class="text-weight-bold caseinfo">A套餐</div>
                </div>
              </div>
              <!-- CASE ID -->
              <div class="row">
                <div class="col">
                  <div class="text-weight-light caseinfo">CASE ID</div>
                </div>
                <div class="col">
                  <div class="text-weight-bold caseinfo">650372</div>
                </div>
              </div>
              <!-- 健檢日期 -->
              <div class="row">
                <div class="col">
                  <div class="text-weight-light caseinfo">健檢日期</div>
                </div>
                <div class="col">
                  <div class="text-weight-bold caseinfo">2022/08/23</div>
                </div>
              </div>
              <!-- 最後更新日期 -->
              <div class="row">
                <div class="col">
                  <div class="text-weight-light caseinfo">最後更新日期</div>
                </div>
                <div class="col">
                  <div class="text-weight-bold caseinfo">2022/08/23</div>
                </div>
              </div>

              <!-- 案件資訊 -->
              <q-separator inset />
            </div>
          </div>
        </q-card-section>

        <!-- 階段資訊 -->
        <q-card-section>
          <div class="row stepdata">
            <!-- 階段資訊 -->
            <div class="col-8">
              <!-- 階段一 -->
              <div class="row">
                <div class="col">
                  <div class="text-weight-thin step1">階段一</div>
                </div>
                <div class="col">
                  <div class="text-weight-light step">生理數據</div>
                </div>
                <div class="col">
                  <div class="text-weight-light step download">完成</div>
                </div>
              </div>
              <!-- 階段二 -->
              <div class="row">
                <div class="col">
                  <div class="text-weight-thin step nonstep">階段二</div>
                </div>
                <div class="col">
                  <div class="text-weight-light step nonstep">風險評估報告</div>
                </div>
                <div class="row">
                  <div class="col">
                    <div class="text-weight-light step download">
                      <a class="download" href="#">點我下載</a>
                    </div>
                  </div>
                  <div class="col">
                    <img src="@/assets/clouds-upload-green.png" />
                  </div>
                </div>
              </div>
              <!-- 階段三 -->
              <div class="row">
                <div class="col">
                  <div class="text-weight-thin step nonstep">階段三</div>
                </div>
                <div class="col">
                  <div class="text-weight-light step nonstep">整合後報告</div>
                </div>
                <div class="row">
                  <div class="col">
                    <div class="text-weight-light step download">
                      <a class="download" href="#">點我下載</a>
                    </div>
                  </div>
                  <div class="col">
                    <img src="@/assets/clouds-upload-green.png" />
                  </div>
                </div>
              </div>

              <!-- 階段四 -->
              <div class="row">
                <div class="col">
                  <div class="text-weight-thin step nonstep">階段四</div>
                </div>
                <div class="col">
                  <div class="text-weight-light step nonstep">影音報告書</div>
                </div>
                <div class="row">
                  <div class="col">
                    <div class="text-weight-light step download">
                      <a class="download" href="#">點我下載</a>
                    </div>
                  </div>
                  <div class="col">
                    <img src="@/assets/clouds-upload-green.png" />
                  </div>
                </div>
              </div>
              <!-- 階段五 -->
              <div class="row">
                <div class="col-4">
                  <div class="text-weight-light step nonstep">階段五</div>
                </div>
                <div class="col-4">
                  <div class="text-weight-light step nonstep">完成</div>
                </div>
              </div>
            </div>
          </div>
        </q-card-section>
      </div>
    </q-card>
  </div>
</template>

<style scoped>
/* 案件資訊卡訊卡 */
.case {
  margin: 117px 80px;
}
.CaseInfo {
  position: relative;
  top: 70px;
}
.casepersoninfo {
  margin: 0px 70px;
  font-size: 12px;
}
.my-card-3 {
  width: 50px;
  margin: 20px 0;
  border: none;
}

/* 案件資訊內容(文字) */
.casetext {
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
.Caseid {
  font-size: 26px;
}
.gender {
  font-size: 18px;
}
.step {
  position: relative;
  color: #21468d;
  top: 20px;
  font-weight: 300;
  padding: 10px 0;
  font-size: 18px;
}
.step1 {
  position: relative;
  color: #21468d;
  top: 20px;
  font-weight: 700;
  padding: 10px 0;
  font-size: 18px;
}
.nonstep {
  font-weight: 300;
  color: #21468d;
  margin: 5px 0;
  font-size: 15px;
  opacity: 0.3;
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
.nowonstep {
  color: #26c700;
  font-size: 17px;
}
.download {
  font-size: 20px;
  color: #26c700;
  font-weight: 300;
}
.caseinfo {
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
.casedata {
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
.q-table thead,
.q-table tr,
.q-table th,
.q-table td {
  color: #21468d !important;
  background-color: #d3deff !important;
}
/* 按鈕 */
.bg-primary {
  top: 5px;
  background: #21468d !important;
}
</style>