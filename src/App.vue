<template>
  <v-app id="inspire">
    <AppBar />

    <v-main>
      <v-container class="pa-2" fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "@/components/Base/AppBar.vue";

export default {
  components: { AppBar },
};
</script>
