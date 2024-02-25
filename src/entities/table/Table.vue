<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {CRUD_TYPE, TABLE_DATA_ELEMENT, TABLE_STRUCTURE_ELEMENT} from "@/shared/structures/tableTypes";
import ConfirmDialog from "@/features/ConfirmDialog.vue";

export default defineComponent({
  name: "Table",
  components: {ConfirmDialog},
  props: {
    tableStructure: {
      required: true,
      type: Array as PropType<TABLE_STRUCTURE_ELEMENT[]>
    },
    tableData: {
      required: false,
      type: Array as PropType<TABLE_DATA_ELEMENT[]>
    },
    crudTypes: {
      required: false,
      type: Array as PropType<CRUD_TYPE[]>
    },
    deleteRequestFunction: {
      required: false,
      type: Function
    },
  },
  emits: {
    'update-data': Boolean
  },
  data() {
    return {
      confirmDelete: false,
      itemToDelete: {} as TABLE_DATA_ELEMENT,

    }
  },
  computed: {
    tableStructurePrepeared(): TABLE_STRUCTURE_ELEMENT[] {
      let prepearedStructure = this.tableStructure;
      if (this.crudTypes && this.crudTypes.includes('delete'))
        prepearedStructure.unshift({value: 'actions', text: ''})
      return this.tableStructure;
    }
  },
  methods: {
    deleteItem(item: TABLE_DATA_ELEMENT) {
      this.confirmDelete = true;
      this.itemToDelete = item;
    },
    closeDeleteConfirmation(continueAction: boolean){
      this.confirmDelete = false;
      if (continueAction && this.deleteRequestFunction){
        this.deleteRequestFunction(this.itemToDelete.id)
        this.$emit('update-data', true);
      }
    }
  }
})
</script>

<template>
  <v-container>
    <v-data-table
        :headers="tableStructurePrepeared"
        :items="tableData && tableData"
        item-key="name"
        fixed-header
        height="400"
        styles="parent-style"
    >
      <template v-slot:item.actions="{ item }" v-if="crudTypes && crudTypes.includes('delete')">
        <v-icon
            size="medium"
            @click="deleteItem(item)"
        >
          delete
        </v-icon>
      </template>
    </v-data-table>
    <ConfirmDialog operation-type="delete" :dialog="confirmDelete" @close-dialog="closeDeleteConfirmation"/>
  </v-container>
</template>

<style scoped>
</style>