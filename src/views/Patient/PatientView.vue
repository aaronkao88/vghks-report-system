<template>
  <div class="q-pa-md">
    <div class="row justify-center">
      <div class="col-9"><PatientTitle></PatientTitle></div>
      <div class="col-4"><PatientList></PatientList></div>
      <div class="col-5"><PatientInfo></PatientInfo></div>
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
import PatientInfo from "@/components/Patient/PatientInfo.vue";
import PatientTitle from "@/components/Patient/PatientTitle.vue";
import PatientList from "@/components/Patient/PatientList.vue";
export default {
  components: {
    PatientTitle,
    PatientList,
    PatientInfo,
  },
};
</script>