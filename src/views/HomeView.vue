<template>
  <div class="home">
    <v-list class="pt-0" flat>
      <section v-for="tarefa in tarefas" :key="tarefa.id">
        <v-list-item
          @click="tarefa.feita = !tarefa.feita"
          :class="{ 'teal lighten-5': tarefa.feita }"
        >
          <template #default>
            <v-list-item-action>
              <v-checkbox
                :input-value="tarefa.feita"
                color="primary"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title
                :class="{
                  'text-decoration-line-through warning--text': tarefa.feita,
                }"
                >{{ tarefa.titulo }}</v-list-item-title
              >
            </v-list-item-content>
            <v-list-item-action>
              <v-btn @click.stop="excluirTarefa(tarefa)" icon>
                <v-icon color="grey">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
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
  methods: {
    excluirTarefa({ id }) {
      this.tarefas = this.tarefas.filter((tarefa) => tarefa.id !== id);
    },
  },
};
</script>
