<template>
  <div>
    <q-layout view="lHh Lpr lff" class="shadow-2 rounded-borders">
      <q-drawer v-model="drawer" show-if-above>
        <q-scroll-area
          style="
            height: calc(100% - 150px);
            margin-top: 150px;
            border-right: 1px solid #ddd;
          "
        >
          <q-list padding>
            <q-item clickable v-ripple>
              <q-item-section avatar> </q-item-section>

              <q-item-section class="nav-link">
                <a href="/" class="nav-link">總覽</a>
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple>
              <q-item-section avatar> </q-item-section>
              <q-item-section class="nav-link">
                <a href="/Patient" class="nav-link">個案管理</a>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar> </q-item-section>

              <q-item-section class="nav-link">
                <a href="/Case" class="nav-link">健檢案件管理</a>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar> </q-item-section>

              <q-item-section class="nav-link">
                <a href="/Systemlog" class="nav-link">系統紀錄</a>
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <div class="absolute-top">
          <img src="@/assets/ksvgh-logo.png" width="250" />
        </div>

        <div class="absolute-bottom footer">
          <p class="copyright">系統設計｜矽塔資訊股份有限公司</p>
        </div>
      </q-drawer>

      <!-- router -->
      <q-page-container>
        <router-view></router-view>
      </q-page-container>
    </q-layout>
  </div>
</template>

<style lang="scss">
// Font import
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@700&family=Noto+Serif+TC:wght@300&display=swap");

//上方導覽區
.nav-link {
  color: #21468d;
}
.q-drawer {
  border-radius: 0 20px 20px 0;
}
a {
  margin: 6px 0;
  text-decoration: none;
  font-weight: 600;
  font-size: 21px;
  color: #21468d;
}
img {
  margin: 40px 30px;
}

// 版權宣告區
.copyright {
  margin: 20px 0;
  text-align: center;
  font-family: "Noto Sans TC", sans-serif !important;
  font-weight: 200;
  color: #ffffff;
}

.footer {
  width: 300px;
  height: 140px;
  border-radius: 0 0 20px 0;
  background-color: #121a33;
}
</style>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      drawer: ref(false),
    };
  },
};
</script>
  