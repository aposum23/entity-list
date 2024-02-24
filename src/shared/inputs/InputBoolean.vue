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
  },
  emits: {
    'data-changed': Object
  },
  data(){
    return {
      modelValue: false
    }
  },
  watch: {
    modelValue(newValue) {
      this.$emit('data-changed', {[this.filterData.id]: newValue})
    }
  }
})
</script>

<template>
  <v-checkbox v-model="modelValue" :label="filterData.label"></v-checkbox></template>
<style scoped>

</style>