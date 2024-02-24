<script lang="ts">
import {defineComponent} from 'vue'
import TableFabric from "@/widgets/TableFabric.vue";
import {FILTER_STRUCTURE_ELEMENT, TABLE_STRUCTURE_ELEMENT} from "@/shared/structures/tableTypes";
import {getEntityData} from "@/pages/entity/api/getData";

export default defineComponent({
  name: "EntityView",
  methods: {getEntityData},
  components: {TableFabric},
  data(){
    return {
      tableStructure: [
        {
          value: 'name',
          text: 'Марка',
        },
        {
          value: 'model',
          text: 'Модель',
        },
        {
          value: 'maxSpeed',
          text: 'Максимальная скорость, км/ч'
        },
        {
          value: 'power',
          text: 'Мощность, л.с.'
        },
        {
          value: 'weight',
          text: 'Снаряженная масса, кг'
        }
      ] as TABLE_STRUCTURE_ELEMENT[],
      filtersStructure: [
        {
          id: 'name',
          name: 'Марка',
          label: 'Марка',
          type: 'text'
        },
        {
          id: 'model',
          name: 'Модель',
          label: 'Модель',
          type: 'text'
        },
        {
          id: 'maxSpeed',
          name: 'Максимальная скорость',
          label: 'Максимальная скорость',
          type: 'number',
          suffix: 'км/ч'
        }
      ] as FILTER_STRUCTURE_ELEMENT[]
    }
  }
})
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <TableFabric
            :table-structure="tableStructure"
            :filters-structure="filtersStructure"
            :get-request-function="getEntityData"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>