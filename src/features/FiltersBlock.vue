<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {FILTER_STRUCTURE_ELEMENT} from "@/shared/structures/tableTypes";
import InputField from "@/shared/inputs/InputField.vue";
import InputBoolean from "@/shared/inputs/InputBoolean.vue";

export default defineComponent({
  name: "FiltersBlock",
  components: {InputBoolean, InputField},
  props: {
    filtersStructure: {
      required: true,
      type: Array as PropType<FILTER_STRUCTURE_ELEMENT[]>
    }
  }
})
</script>

<template>
  <v-container>
    <v-row>
      <template v-for="filter in filtersStructure">
        <v-col cols="4">
          <template v-if="filter.type === 'input'">
            <InputField :filter-data="filter"/>
          </template>
          <template v-else-if="filter.type === 'inputNumber'">
            <InputField :filter-data="filter"/>
          </template>
          <template v-else-if="filter.type === 'boolean'">
            <InputBoolean :filter-data="filter"/>
          </template>
        </v-col>
      </template>
    </v-row>
    <v-row justify="end">
      <v-col cols="3">
        <v-btn variant="tonal">
          Отфильтровать
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>