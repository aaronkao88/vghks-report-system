<template>
  <div class="q-pa-md">
    <div class="row justify-center">
      <div class="col-9">
        <CaseTitle></CaseTitle>
      </div>
      <!-- 個案清單 -->
      <div class="col-4">
        <CaseList></CaseList>
      </div>
      <div class="col-5">
        <CaseInfo></CaseInfo>
      </div>
    </div>
  </div>
</template>

<style scoped>
.col-5 {
  height: 1100px;
  background-color: #ffffff;
  border-radius: 0 0 20px 0;
}
</style>

<script>
import CaseTitle from "@/components/Case/CaseTitle.vue";
import CaseList from "@/components/Case/CaseList.vue";
import CaseInfo from "@/components/Case/CaseInfo.vue";

export default {
  components: {
    CaseTitle,
    CaseList,
    CaseInfo,
  },
};
</script>