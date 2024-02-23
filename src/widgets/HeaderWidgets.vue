<script lang="ts">
import {defineComponent} from 'vue'
import User from "@/entities/User.vue";

export default defineComponent({
  name: "HeaderWidgets",
  components: {User}
})
</script>

<template>
<v-container>
  <v-row>
    <v-col cols="4">
      <h1>EntityList</h1>
    </v-col>
    <v-spacer/>
    <v-col cols="1">
      <User/>
    </v-col>
  </v-row>
</v-container>
</template>

<style scoped>
.container {
  background: #becb38;
  margin-top: 1rem;
  border-radius: 6px;
  box-shadow: #7f8c38 3px 3px 6px;
}
</style>