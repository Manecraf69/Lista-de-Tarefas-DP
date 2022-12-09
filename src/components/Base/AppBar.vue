<template>
  <v-container class="pa-0">
    <v-app-bar
      app
      dark
      color="teal"
      prominent
      src="@/assets/minecraft-wallpaper.jpeg"
    >
      <template #img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title class="text-h6">Atividades</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-icon>mdi-brightness-6</v-icon>
      </v-btn>
    </v-app-bar>

    <NavBar />
  </v-container>
</template>

<script>
import NavBar from "@/components/Base/NavBar.vue";

export default {
  name: "AppBar",
  components: { NavBar },
  data: () => ({
    drawer: null,
  }),
};
</script>

<style></style>
