<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "User",
  props: {
  }
})
</script>

<template>
  <div class="user-icon">
    <v-icon size="50">account_circle</v-icon>
  </div>
</template>

<style scoped>
.user-icon {
  width: 2rem;
  height: 2rem;
}
</style>