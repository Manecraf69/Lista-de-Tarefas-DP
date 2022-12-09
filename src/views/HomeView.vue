<template>
  <div class="home">
    <v-list class="pt-0" flat>
      <section v-for="tarefa in tarefas" :key="tarefa.id">
        <v-list-item>
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox :input-value="active" color="primary"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{ tarefa.titulo }}</v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </section>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    tarefas: [
      {
        id: 0,
        titulo: "tarefa1",
        feita: false,
      },
      {
        id: 1,
        titulo: "tarefa2",
        feita: false,
      },
      {
        id: 2,
        titulo: "tarefa3",
        feita: false,
      },
      {
        id: 3,
        titulo: "tarefa4",
        feita: false,
      },
    ],
  }),
};
</script>
