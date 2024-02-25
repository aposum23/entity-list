<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {FILTER_STRUCTURE_ELEMENT, FORM_STRUCTURE_ELEMENT} from "@/shared/structures/tableTypes";

export default defineComponent({
  name: "InputSelect",
  props: {
    fieldStructure: {
      required: true,
      type: Object as PropType<FILTER_STRUCTURE_ELEMENT | FORM_STRUCTURE_ELEMENT>
    }
  },
  emits: {
    'data-changed': Object
  },
  data(){
    return {
      modelValue: false,
    }
  },
  watch: {
    modelValue(newValue) {
      this.$emit('data-changed', {[this.fieldStructure.id]: newValue})
    }
  }
})
</script>

<template>
  <v-select
      clearable
      v-model="modelValue"
      :label="fieldStructure.label"
      :items="fieldStructure.items"
  ></v-select>
</template>

<style scoped>

</style>