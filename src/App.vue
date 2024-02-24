<template>
  <v-app>
    <HeaderWidgets/>
    <v-main transition="scroll-y-transition">
      <router-view/>
    </v-main>
  </v-app>
</template>

<style lang="scss">
</style>
<script setup lang="ts">
import HeaderWidgets from "@/widgets/HeaderWidgets.vue";
</script>