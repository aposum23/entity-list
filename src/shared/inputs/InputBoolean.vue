<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {FILTER_STRUCTURE_ELEMENT} from "@/shared/structures/tableTypes";

export default defineComponent({
  name: "InputBoolean",
  props: {
    filterData: {
      required: true,
      type: Object as PropType<FILTER_STRUCTURE_ELEMENT>
    }
  }
})
</script>

<template>
  <v-checkbox :label="filterData.label"></v-checkbox></template>
<style scoped>

</style>