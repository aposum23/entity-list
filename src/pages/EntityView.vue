<script lang="ts">
import {defineComponent} from 'vue'
import TableFabric from "@/widgets/table/TableFabric.vue";
import {TABLE_STRUCTURE_ELEMENT} from "@/shared/structures/tableTypes";

export default defineComponent({
  name: "EntityView",
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
          text: 'Характеристики',
          align: 'center',
          children: [
            {
              value: 'maxSpeed',
              text: 'Максимальная скорость, км/ч'
            },
            {
              value: 'power',
              text: 'Мощность, л.с'
            },
            {
              value: 'weight',
              text: 'Снаряженная масса, кг'
            }
          ]
        }
      ] as TABLE_STRUCTURE_ELEMENT[],
    }
  }
})
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <TableFabric :table-structure="tableStructure"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>