<script lang="ts">
import {defineComponent, PropType} from 'vue'
import InputField from "@/shared/inputs/InputField.vue";
import {FORM_STRUCTURE_ELEMENT} from "@/shared/structures/tableTypes";
import InputBoolean from "@/shared/inputs/InputBoolean.vue";
import {isEmpty, some} from "lodash/fp";

export default defineComponent({
  name: "CreateDialog",
  components: {InputBoolean, InputField},
  props: {
    createRequestFunction: {
      required: false,
      type: Function
    },
    dialog: {
      required: true,
      type: Boolean
    },
    formStructure: {
      required: false,
      type: Array as PropType<FORM_STRUCTURE_ELEMENT[]>
    }
  },
  emits: {
    'close-dialog': Boolean
  },
  data() {
    return {
      formData: {} as {[K:string]: string | number | boolean}
    }
  },
  methods: {
    dataChanged(e: {[K:string]: string | number | boolean}) {
      if (!some(isEmpty, e))
        this.formData = {...this.formData, ...e};
      else {
        const formKey = Object.keys(e)[0]
        delete this.formData[formKey];
      }
    },
  }
})
</script>

<template>
  <v-dialog v-model="dialog" scrollable width="50%">
    <v-card>
      <v-card-title>Создание записи</v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <template v-for="element in formStructure">
          <v-row justify="center">
            <v-col cols="11">
              <template v-if="element.type === 'text'">
                <InputField :field-structure="element" @data-changed="dataChanged"/>
              </template>
              <template v-else-if="element.type === 'number'">
                <InputField :field-structure="element" @data-changed="dataChanged"/>
              </template>
              <template v-else-if="element.type === 'boolean'">
                <InputBoolean :field-structure="element" @data-changed="dataChanged"/>
              </template>
            </v-col>
          </v-row>
        </template>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions class="justify-end">
        <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
          Закрыть
        </v-btn>
        <v-btn color="primary" variant="text" @click="dialog = false">
          Создать
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>

</style>