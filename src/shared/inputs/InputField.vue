<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {FILTER_STRUCTURE_ELEMENT} from "@/shared/structures/tableTypes";

export default defineComponent({
  name: "InputText",
  props: {
    filterData: {
      required: true,
      type: Object as PropType<FILTER_STRUCTURE_ELEMENT>
    }
  }
})
</script>

<template>
  <v-text-field :label="filterData.label" variant="outlined" :suffix="filterData.suffix"></v-text-field>
</template>

<style scoped>

</style>