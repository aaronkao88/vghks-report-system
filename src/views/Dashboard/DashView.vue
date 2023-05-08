<template>
  <div class="q-pa-md">
    <div class="row justify-center">
      <div class="col-8 col-lg-6">
        <Dashboard></Dashboard>

        <div class="q-mt-lg col-4 col-lg-6">
          <allcase></allcase>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Dashboard from "@/components/Dashboard/MyCard.vue";
import allcase from "@/components/Dashboard/AllCase.vue";

export default {
  components: {
    Dashboard,
    allcase,
  },
};
</script>