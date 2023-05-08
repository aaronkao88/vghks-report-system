<template>
  <div class="q-pa-md">
    <div class="row justify-center">
      <div class="col-9"><SystemTitle></SystemTitle></div>
      <div class="col-4"><SystemList></SystemList></div>
      <div class="col-5"><systemInfo></systemInfo></div>
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
import SystemTitle from "@/components/System/SystemTitle.vue";
import SystemList from "@/components/System/SystemList.vue";
import SystemInfo from "@/components/System/SystemInfo.vue";
export default {
  components: {
    SystemTitle,
    SystemList,
    SystemInfo,
  },
};
</script>