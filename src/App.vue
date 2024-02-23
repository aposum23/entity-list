<template>
  <v-app>
    <HeaderWidgets/>
    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '@/pages/HelloWorld.vue';
import HeaderWidgets from "@/widgets/HeaderWidgets.vue";

export default Vue.extend({
  name: 'App',

  components: {
    HeaderWidgets,
    HelloWorld,
  },

  data: () => ({
  }),
});
</script>
