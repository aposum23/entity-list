<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {FILTER_STRUCTURE_ELEMENT} from "@/shared/structures/tableTypes";
import InputField from "@/shared/inputs/InputField.vue";
import InputBoolean from "@/shared/inputs/InputBoolean.vue";
import {some, isEmpty} from 'lodash/fp';

export default defineComponent({
  name: "FiltersBlock",
  components: {InputBoolean, InputField},
  props: {
    filtersStructure: {
      required: true,
      type: Array as PropType<FILTER_STRUCTURE_ELEMENT[]>
    }
  },
  emits: {
    'filter-data': Object
  },
  data(){
    return {
      filters: {} as {[K:string]: string | number | boolean}
    }
  },
  methods: {
    dataChanged(e: {[K:string]: string | number | boolean}) {
      if (!some(isEmpty, e))
        this.filters = {...this.filters, ...e};
      else {
        const filterKey = Object.keys(e)[0]
        delete this.filters[filterKey];
      }
    },
    filterData(){
      this.$emit('filter-data', this.filters);
    }
  }
})
</script>

<template>
  <v-container>
    <v-row>
      <template v-for="filter in filtersStructure">
        <v-col cols="4">
          <template v-if="filter.type === 'text'">
            <InputField :filter-data="filter" @data-changed="dataChanged"/>
          </template>
          <template v-else-if="filter.type === 'number'">
            <InputField :filter-data="filter" @data-changed="dataChanged"/>
          </template>
          <template v-else-if="filter.type === 'boolean'">
            <InputBoolean :filter-data="filter" @data-changed="dataChanged"/>
          </template>
        </v-col>
      </template>
    </v-row>
    <v-row justify="end">
      <v-col cols="3">
        <v-btn variant="tonal" @click="filterData">
          Отфильтровать
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>