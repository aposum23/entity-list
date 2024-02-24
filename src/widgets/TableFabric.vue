<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {
  CRUD_TYPE,
  FILTER_STRUCTURE_ELEMENT,
  FORM_STRUCTURE_ELEMENT, TABLE_DATA_ELEMENT,
  TABLE_STRUCTURE_ELEMENT
} from "@/shared/structures/tableTypes";
import Table from "@/entities/table/Table.vue";
import FiltersBlock from "@/features/FiltersBlock.vue";

export default defineComponent({
  name: "TableFabric",
  components: {FiltersBlock, Table},
  props: {
    getRequestFunction: {
      required: true,
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
      filters: {}
    }
  },
  computed: {
    tableData: function(): TABLE_DATA_ELEMENT[] {
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
        <FiltersBlock :filters-structure="filtersStructure" @filter-data="filterData"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <Table :table-structure="tableStructure" :table-data="tableData"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>