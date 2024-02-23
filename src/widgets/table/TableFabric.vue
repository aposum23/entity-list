<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {
  CRUD_TYPE,
  FILTER_STRUCTURE_ELEMENT,
  FORM_STRUCTURE_ELEMENT,
  TABLE_STRUCTURE_ELEMENT
} from "@/shared/structures/tableTypes";
import Table from "@/entities/Table.vue";

export default defineComponent({
  name: "TableFabric",
  components: {Table},
  props: {
    tableStructure: {
      required: true,
      type: Array as PropType<TABLE_STRUCTURE_ELEMENT[]>
    },
    filtersStructure: {
      required: false,
      type: Array as PropType<FILTER_STRUCTURE_ELEMENT[]>
    },
    formStructure: {
      required: false,
      type: Array as PropType<FORM_STRUCTURE_ELEMENT[]>
    },
    crudTypes: {
      required: false,
      type: Array as PropType<CRUD_TYPE[]>
    }
  }
})
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <Table :table-structure="tableStructure"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>