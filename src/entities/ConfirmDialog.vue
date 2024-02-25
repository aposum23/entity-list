<script lang="ts">
import {defineComponent, PropType} from 'vue'

export default defineComponent({
  name: "ConfirmDialog",
  props: {
    dialog: Boolean,
    operationType: String as PropType<'create' | 'delete' | 'update'>
  },
  emits: {
    'close-dialog': Boolean
  },
  computed: {
    confirmationMessage(){
      if (this.operationType === 'create') return 'Вы уверены что хотите создать?';
      else if (this.operationType === 'delete') return 'Вы уверены что хотите удалить?';
      else if (this.operationType === 'update') return 'Вы уверены что хотите применить изменения?';
      else return 'Вы уверенны что хотите выполнить операцию?';
    }
  },
  methods: {
    closeDialog(continueAction: boolean) {
      this.$emit('close-dialog', continueAction);
    }
  }
})
</script>

<template>
  <v-dialog
    v-model="dialog"
  >
    <v-card>
      <v-card-text class="text-center pa-5 font-weight-bold title">
          {{confirmationMessage}}
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn color="secondary" @click="closeDialog(false)"
        >Нет</v-btn
        >
        <v-btn color="error" @click="closeDialog(true)"
        >Да</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>

</style>