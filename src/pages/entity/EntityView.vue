<script lang="ts">
import {defineComponent} from 'vue'
import TableFabric from "@/widgets/TableFabric.vue";
import {
  CRUD_TYPE,
  FILTER_STRUCTURE_ELEMENT,
  FORM_STRUCTURE_ELEMENT,
  TABLE_STRUCTURE_ELEMENT
} from "@/shared/structures/tableTypes";
import {getEntityData} from "@/pages/entity/api/getData";
import {deleteData} from "@/pages/entity/api/deleteData";
import {createData} from "@/pages/entity/api/createData";

export default defineComponent({
  name: "EntityView",
  methods: {createData, deleteData, getEntityData},
  components: {TableFabric},
  data(){
    return {
      tableStructure: [
        {
          value: 'id',
          text: 'Код',
        },
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
        },
        {
          value: 'type',
          text: 'Тип кузова'
        },
        {
          value: 'inProduction',
          text: 'Производится'
        },
        {
          value: 'imageUrl',
          text: 'Ссылка на изображение',
          type: 'url'
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
        },
        {
          id: 'type',
          name: 'Тип кузова',
          label: 'Тип кузова',
          items: ['Седан', 'Купе', 'Универсал', 'Хэтчбек', 'Кабриолет', 'Внедорожник'],
          type: 'select'
        },
        {
          id: 'inProduction',
          name: 'Производится',
          label: 'Производится',
          items: ['Да', 'Нет'],
          type: 'select'
        }
      ] as FILTER_STRUCTURE_ELEMENT[],
      formStructure: [
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
          suffix: 'км/ч',
          type: 'number'
        },
        {
          id: 'power',
          name: 'Мощность',
          label: 'Мощность',
          suffix: 'л.с.',
          type: 'number'
        },
        {
          id: 'weight',
          name: 'Снаряженная масса',
          label: 'Снаряженная масса',
          suffix: 'кг',
          type: 'number'
        },
        {
          id: 'type',
          name: 'Тип кузова',
          label: 'Тип кузова',
          items: ['Седан', 'Купе', 'Универсал', 'Хэтчбек', 'Кабриолет', 'Внедорожник'],
          type: 'select'
        },
        {
          id: 'inProduction',
          name: 'Производится',
          label: 'Производится',
          defaultValue: true,
          type: 'boolean'
        },
        {
          id: 'imageUrl',
          name: 'Ссылка на картинку',
          label: 'Ссылка на картинку',
          type: 'imageUrl'
        }
      ] as FORM_STRUCTURE_ELEMENT[],
      crudTypes: ['create', 'delete'] as CRUD_TYPE[]
    }
  },
})
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <TableFabric
            :table-structure="tableStructure"
            :filters-structure="filtersStructure"
            :form-structure="formStructure"
            :get-request-function="getEntityData"
            :delete-request-function="deleteData"
            :create-request-function="createData"
            :crud-types="crudTypes"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>