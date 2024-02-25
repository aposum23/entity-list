<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {CRUD_TYPE, FILTER_STRUCTURE_ELEMENT, FORM_STRUCTURE_ELEMENT} from "@/shared/structures/tableTypes";
import InputField from "@/shared/inputs/InputField.vue";
import InputBoolean from "@/shared/inputs/InputBoolean.vue";
import {some, isEmpty} from 'lodash/fp';
import CreateDialog from "@/entities/CreateDialog.vue";

export default defineComponent({
  name: "FiltersBlock",
  components: {CreateDialog, InputBoolean, InputField},
  props: {
    filtersStructure: {
      required: true,
      type: Array as PropType<FILTER_STRUCTURE_ELEMENT[]>
    },
    crudTypes: {
      required: false,
      type: Array as PropType<CRUD_TYPE[]>
    },
    createRequestFunction: {
      required: false,
      type: Function
    },
    formStructure: {
      required: false,
      type: Array as PropType<FORM_STRUCTURE_ELEMENT[]>
    }
  },
  emits: {
    'filter-data': Object,
    'update-data': Boolean
  },
  data(){
    return {
      filters: {} as {[K:string]: string | number | boolean},
      openDialog: false,
      createStatus: true,
      showAlert: false,
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
    },
    openCloseCreateDialog(updateData: boolean){
      updateData && this.$emit('update-data', updateData);
      this.createStatus = updateData;
      updateData && this.openAlert();
      this.openDialog = !this.openDialog;
    },
    openAlert(){
      this.showAlert = true;
      setTimeout(() => this.showAlert = false, 3000);
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
            <InputField :field-structure="filter" @data-changed="dataChanged"/>
          </template>
          <template v-else-if="filter.type === 'number'">
            <InputField :field-structure="filter" @data-changed="dataChanged"/>
          </template>
          <template v-else-if="filter.type === 'boolean'">
            <InputBoolean :field-structure="filter" @data-changed="dataChanged"/>
          </template>
        </v-col>
      </template>
    </v-row>
    <v-row justify="end">
      <v-col cols="2" v-if="crudTypes && crudTypes.includes('create')">
        <v-btn variant="tonal" @click="openCloseCreateDialog(false)">
          Создать
        </v-btn>
      </v-col>
      <v-col cols="3">
        <v-btn variant="tonal" color="primary" @click="filterData">
          Отфильтровать
        </v-btn>
      </v-col>
    </v-row>
    <CreateDialog
        :dialog="openDialog"
        :create-request-function="createRequestFunction"
        :form-structure="formStructure"
        @close-dialog="openCloseCreateDialog"
    />
    <v-alert
      v-model="showAlert"
      :type="createStatus ? 'success' : 'error'"
      style="position: fixed; bottom: 0; right: 0"
    >
      {{`Запись ${createStatus ? 'создана' : 'не создана'}`}}
    </v-alert>
  </v-container>
</template>

<style scoped>

</style>