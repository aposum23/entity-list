<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {TABLE_STRUCTURE_ELEMENT} from "@/shared/structures/tableTypes";

export default defineComponent({
  name: "Table",
  props: {
    tableStructure: {
      required: true,
      type: Array as PropType<TABLE_STRUCTURE_ELEMENT[]>
    }
  },
  data() {
    return {
      tableData: [
        {
          name: 'BMW',
          model: 'M3 Competition',
          maxSpeed: '250',
          power: '510',
          weight: '1805'
        }
      ]
    }
  },
})
</script>

<template>
  <v-container>
    <v-data-table
        :headers="tableStructure"
        :items="tableData"
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