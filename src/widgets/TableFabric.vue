<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {
  CRUD_TYPE,
  FILTER_STRUCTURE_ELEMENT,
  FORM_STRUCTURE_ELEMENT, TABLE_DATA_ELEMENT,
  TABLE_STRUCTURE_ELEMENT
} from "@/shared/structures/tableTypes";
import Table from "@/entities/table/Table.vue";
import TableHeader from "@/features/TableHeader.vue";
import {prepareData} from "@/pages/entity/api/exampleData";

export default defineComponent({
  name: "TableFabric",
  components: {TableHeader, Table},
  props: {
    getRequestFunction: {
      required: true,
      type: Function
    },
    deleteRequestFunction: {
      required: false,
      type: Function
    },
    tableStructure: {
      required: true,
      type: Array as PropType<TABLE_STRUCTURE_ELEMENT[]>
    },
    filtersStructure: {
      required: false,
      type: Array as PropType<FILTER_STRUCTURE_ELEMENT[]>
    },
    formStructure: {
      required: false,
      type: Array as PropType<FORM_STRUCTURE_ELEMENT[]>
    },
    crudTypes: {
      required: false,
      type: Array as PropType<CRUD_TYPE[]>
    }
  },
  data(){
    return {
      filters: {},
      dataUpdate: true,
      dataGenerated: false, // Это нужно только чтобы сгенерировать разово данные для демонстрации
    }
  },
  computed: {
    tableData: function(): TABLE_DATA_ELEMENT[] {
      // Это нужно только чтобы сгенерировать разово данные для демонстрации
      if (!this.dataGenerated) {
        prepareData();
        this.dataGenerated = true;
      }
      // --------------------------------------------------------------------
      if (this.dataUpdate) this.dataUpdate = false;
      return this.getRequestFunction(this.filters);
    }
  },
  methods: {
    filterData(e: {[K:string]: string | number | boolean}){
      console.log('e', Object.keys(e));
      this.filters = {...e};
    }
  }
})
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" v-if="filtersStructure">
        <TableHeader
            :filters-structure="filtersStructure"
            :crud-types="crudTypes"
            :form-structure="formStructure"
            @filter-data="filterData"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <Table
            :table-structure="tableStructure"
            :table-data="tableData"
            :crud-types="crudTypes"
            :delete-request-function="deleteRequestFunction"
            @update-data="(e) => {dataUpdate = e}"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>