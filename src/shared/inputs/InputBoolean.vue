<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {FILTER_STRUCTURE_ELEMENT, FORM_STRUCTURE_ELEMENT} from "@/shared/structures/tableTypes";

export default defineComponent({
  name: "InputBoolean",
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
      modelValue: false
    }
  },
  watch: {
    modelValue(newValue) {
      this.$emit('data-changed', {[this.fieldStructure.id]: newValue ? 'Да' : 'Нет'})
    }
  },
  mounted(){
    if (this.fieldStructure.defaultValue && typeof this.fieldStructure.defaultValue === 'boolean')
      this.modelValue = this.fieldStructure.defaultValue
    this.$emit('data-changed', {[this.fieldStructure.id]: this.modelValue ? 'Да' : 'Нет'})
  }
})
</script>

<template>
  <v-checkbox v-model="modelValue">
    <template v-slot:label>
      {{fieldStructure.label}}
    </template>
  </v-checkbox>
</template>
<style scoped>

</style>