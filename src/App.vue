<template>
  <q-layout class="bg-darkblue">
    <q-page-container>
      <Drawer></Drawer>
    </q-page-container>
  </q-layout>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&family=Noto+Serif+TC:wght@200&display=swap");

html,
body {
  background-color: #394a6c;
  font-family: "Noto Sans TC", sans-serif;
}

#app {
  font-family: "Noto Sans TC", sans-serif;
}

.bg-darkblue {
  background-color: #394a6c;
}
</style>

<script>
import { ref } from "vue";
import Drawer from "./components/NavDrawer.vue";

export default {
  name: "LayoutDefault",

  components: {
    Drawer,
  },

  setup() {
    return {
      leftDrawerOpen: ref(false),
    };
  },
};
</script>
