<template>
  <q-card-section
    square
    flat
    style="
      max-width: 1450px;
      background-color: #f7f9ff;
      border-radius: 20px 20px 0 0;
    "
  >
    <div class="q-pa-md doc-container">
      <div class="row items-start">
        <div class="col-4">
          <div class="text-h6 q-mt-sm">
            <P style="color: #21468d; font-weight: 600"
              >進度明細｜Progress schedule</P
            >
          </div>
        </div>
        <div class="col-4">
          <q-btn-dropdown
            style="background-color: #ffffff; color: #21468d"
            label="階段一"
          >
            <q-list>
              <q-item
                clickable
                style="background-color: #ffffff; color: #21468d"
                v-close-popup
                @click="step"
              >
                <q-item-section>
                  <q-item-label onclick="step">階段一</q-item-label>
                </q-item-section>
              </q-item>

              <q-item
                clickable
                style="background-color: #ffffff; color: #21468d"
                v-close-popup
                @click="step2"
              >
                <q-item-section>
                  <q-item-label onclick="step2">階段二</q-item-label>
                </q-item-section>
              </q-item>

              <q-item
                clickable
                style="background-color: #ffffff; color: #21468d"
                v-close-popup
                @click="step3"
              >
                <q-item-section>
                  <q-item-label onclick="step3">階段三</q-item-label>
                </q-item-section>
              </q-item>

              <q-item
                clickable
                style="background-color: #ffffff; color: #21468d"
                v-close-popup
                @click="step4"
              >
                <q-item-section>
                  <q-item-label onclick="step4">階段四</q-item-label>
                </q-item-section>
              </q-item>

              <q-item
                clickable
                style="background-color: #ffffff; color: #21468d"
                v-close-popup
                @click="step5"
              >
                <q-item-section>
                  <q-item-label onclick="step5">階段五</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
      </div>
    </div>
  </q-card-section>

  <q-card-section
    class="col"
    square
    flat
    style="
      max-width: 1450px;
      height: 480px;
      background-color: #ffffff;
      border-radius: 0 0 20px 20px;
    "
  >
    <div class="row">
      <div class="col">
        <div class="q-pa-md">
          <div class="row text-left">
            <div class="col-lg-6">
              <p style="color: #21468d; font-weight: 600">完成影音報告書</p>
            </div>

            <div class="text-right">
              <div class="col-lg-6">
                <p style="color: #ff5c5c; font-weight: 600">共計：57比資料</p>
              </div>
            </div>

            <q-table
              :rows="rows"
              :columns="columns"
              v-model:selected="selected"
              v-model:pagination="pagination"
              @focusin="activateNavigation"
              @focusout="deactivateNavigation"
              @keydown="onKey"
              title-class="text-bold text-blue-9"
              table-style="background-color: #F7F9FF; color: #21468D;"
              table-header-style="height: 65px; background-color: #D3DEFF; color: #21468D;"
            >
            </q-table>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="q-pa-md">
          <div class="row text-left">
            <div class="col-lg-6">
              <P style="color: #21468d; font-weight: 600">等待檢驗資料</P>
            </div>

            <div class="text-right">
              <div class="col-lg-6">
                <p style="color: #ff5c5c; font-weight: 600">共計：57比資料</p>
              </div>
            </div>

            <q-table
              :rows="rows"
              :columns="columns"
              v-model:selected="selected"
              v-model:pagination="pagination"
              @focusin="activateNavigation"
              @focusout="deactivateNavigation"
              @keydown="onKey"
              title-class="text-bold text-blue-9"
              table-style="background-color: #F7F9FF; color: #21468D;"
              table-header-style="height: 65px; background-color: #D3DEFF; color: #21468D;"
            >
            </q-table>
          </div>
        </div>
      </div>
    </div>
  </q-card-section>
</template>

<script>
import { ref, computed, nextTick } from "vue";
const columns = [
  {
    number: "number",
    required: true,
    label: "編號",
    align: "center",
    field: (row) => row.number,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "name",
    align: "left",
    label: "姓名",
    field: "name",
    sortable: true,
  },
  {
    birth: "birth",
    label: "生日",
    field: "birth",
    align: "left",
    sortable: true,
  },
  {
    identifier: "identifier",
    label: "身分證字號",
    align: "left",
    field: "identifier",
  },
  {
    medicalnum: "medicalnum",
    label: "病歷號",
    align: "left",
    field: "medicalnum",
  },
  { status: "status", label: "狀態", field: "status" },
];

const rows = [
  {
    number: 1,
    name: "王大明",
    birth: "1995/04/02",
    identifier: "A123456789",
    medicalnum: "540324",
    status: "階段一 22/08/30",
  },
  {
    number: 2,
    name: "王大明",
    birth: "1995/04/02",
    identifier: "A123456789",
    medicalnum: "540324",
    status: "階段一 22/08/30",
  },
  {
    number: 3,
    name: "王大明",
    birth: "1995/04/02",
    identifier: "A123456789",
    medicalnum: "540324",
    status: "階段一 22/08/30",
  },
  {
    number: 4,
    name: "王大明",
    birth: "1995/04/02",
    identifier: "A123456789",
    medicalnum: "540324",
    status: "階段一 22/08/30",
  },
  {
    number: 5,
    name: "王大明",
    birth: "1995/04/02",
    identifier: "A123456789",
    medicalnum: "540324",
    status: "階段一 22/08/30",
  },
  {
    number: 6,
    name: "王大明",
    birth: "1995/04/02",
    identifier: "A123456789",
    medicalnum: "540324",
    status: "階段一 22/08/30",
  },
  {
    number: 7,
    name: "王大明",
    birth: "1995/04/02",
    identifier: "A123456789",
    medicalnum: "540324",
    status: "階段一 22/08/30",
  },
];

export default {
  setup() {
    const tableRef = ref(null);

    const navigationActive = ref(false);
    const pagination = ref({});
    const selected = ref([]);

    return {
      tableRef,

      navigationActive,
      filter: ref(""),
      selected,
      pagination,

      columns,
      rows,

      tableClass: computed(() =>
        navigationActive.value === true ? "shadow-8 no-outline" : null
      ),

      activateNavigation() {
        navigationActive.value = true;
      },

      deactivateNavigation() {
        navigationActive.value = false;
      },

      onKey(evt) {
        if (
          navigationActive.value !== true ||
          [33, 34, 35, 36, 38, 40].indexOf(evt.keyCode) === -1 ||
          tableRef.value === null
        ) {
          return;
        }

        evt.preventDefault();

        const { computedRowsNumber, computedRows } = tableRef.value;

        if (computedRows.length === 0) {
          return;
        }

        const currentIndex =
          selected.value.length > 0
            ? computedRows.indexOf(selected.value[0])
            : -1;
        const currentPage = pagination.value.page;
        const rowsPerPage =
          pagination.value.rowsPerPage === 0
            ? computedRowsNumber
            : pagination.value.rowsPerPage;
        const lastIndex = computedRows.length - 1;
        const lastPage = Math.ceil(computedRowsNumber / rowsPerPage);

        let index = currentIndex;
        let page = currentPage;

        switch (evt.keyCode) {
          case 36: // Home
            page = 1;
            index = 0;
            break;
          case 35: // End
            page = lastPage;
            index = rowsPerPage - 1;
            break;
          case 33: // PageUp
            page = currentPage <= 1 ? lastPage : currentPage - 1;
            if (index < 0) {
              index = 0;
            }
            break;
          case 34: // PageDown
            page = currentPage >= lastPage ? 1 : currentPage + 1;
            if (index < 0) {
              index = rowsPerPage - 1;
            }
            break;
          case 38: // ArrowUp
            if (currentIndex <= 0) {
              page = currentPage <= 1 ? lastPage : currentPage - 1;
              index = rowsPerPage - 1;
            } else {
              index = currentIndex - 1;
            }
            break;
          case 40: // ArrowDown
            if (currentIndex >= lastIndex) {
              page = currentPage >= lastPage ? 1 : currentPage + 1;
              index = 0;
            } else {
              index = currentIndex + 1;
            }
            break;
        }

        if (page !== pagination.value.page) {
          pagination.value.page = page;

          nextTick(() => {
            const { computedRows } = tableRef.value;
            selected.value = [
              computedRows[Math.min(index, computedRows.length - 1)],
            ];
          });
        } else {
          selected.value = [computedRows[index]];
        }
      },
    };
  },
};
</script>
  
  
   
   