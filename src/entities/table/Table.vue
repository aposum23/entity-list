<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {TABLE_DATA_ELEMENT, TABLE_STRUCTURE_ELEMENT} from "@/shared/structures/tableTypes";
import {tableData} from "@/entities/table/structures/tableData";

export default defineComponent({
  name: "Table",
  props: {
    tableStructure: {
      required: true,
      type: Array as PropType<TABLE_STRUCTURE_ELEMENT[]>
    },
    tableData: {
      required: false,
      type: Array as PropType<TABLE_DATA_ELEMENT[]>
    }
  },
  data() {
    return {
    }
  },
})
</script>

<template>
  <v-container>
    <v-data-table
        :headers="tableStructure"
        :items="tableData && tableData"
        item-key="name"
        fixed-header
        height="500"
        styles="parent-style"
    >
    </v-data-table>
  </v-container>
</template>

<style scoped>
</style>