<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {FILTER_STRUCTURE_ELEMENT} from "@/shared/structures/tableTypes";

export default defineComponent({
  name: "InputField",
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
      modelValue: undefined,
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
  <v-text-field
      v-model="modelValue"
      :label="filterData.label"
      variant="outlined"
      :suffix="filterData.suffix"
      :type="filterData.type"
  ></v-text-field>
</template>

<style scoped>

</style>