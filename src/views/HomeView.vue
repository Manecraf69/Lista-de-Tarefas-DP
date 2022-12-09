<template>
  <div class="home">
    <v-text-field
      outlined
      clearable
      class="pa-3"
      color="teal"
      hide-details
      v-model="tituloTarefa"
      append-icon="mdi-send"
      label="Adicione uma tarefa"
      @keyup.enter="criarTarefa()"
      @click:append="criarTarefa()"
    ></v-text-field>
    <v-list color="transparent" class="pt-0" flat>
      <section align="center" class="mt-16 pt-16" v-if="!tarefas.length">
        <v-icon color="teal lighten-3" size="64px">mdi-playlist-check</v-icon>
        <h1 class="teal--text text--lighten-3">Não há tarefas</h1>
      </section>
      <section v-else v-for="tarefa in tarefas" :key="tarefa.id">
        <v-list-item
          @click="tarefa.feita = !tarefa.feita"
          :class="verificarTema(tarefa)"
        >
          <template #default>
            <v-list-item-action>
              <v-checkbox :input-value="tarefa.feita" color="teal"></v-checkbox>
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
              <v-btn @click.stop="deletarTarefa(tarefa)" icon>
                <v-icon color="grey">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </section>
    </v-list>
    <v-snackbar v-model="adicionou" :timeout="doisSegundos">
      Tarefa adicionada!

      <template #action="{ attrs }">
        <v-btn color="teal" text v-bind="attrs" @click="adicionou = false">
          Fechar
        </v-btn>
      </template>
    </v-snackbar>
    <v-snackbar v-model="excluiu" :timeout="doisSegundos">
      Tarefa excluída!

      <template #action="{ attrs }">
        <v-btn
          color="red lighten-3"
          text
          v-bind="attrs"
          @click="excluiu = false"
        >
          Fechar
        </v-btn>
      </template>
    </v-snackbar>
    <v-snackbar v-model="erro" :timeout="doisSegundos">
      Escreva algo para adicionar uma terafa!

      <template #action="{ attrs }">
        <v-btn color="warning" text v-bind="attrs" @click="erro = false">
          Fechar
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "Home",
  data: () => ({
    doisSegundos: 2000,
    tituloTarefa: "",
    adicionou: false,
    excluiu: false,
    erro: false,
  }),
  computed: {
    ...mapState("todo", ["tarefas"]),
  },
  methods: {
    ...mapMutations("todo", ["adicionarTarefa", "excluirTarefa"]),

    verificarTema({ feita }) {
      if (this.$vuetify.theme.dark && feita) {
        return "rounded teal darken-4";
      } else if (feita) {
        return "rounded teal lighten-4";
      } else {
        return "rounded";
      }
    },
    criarTarefa() {
      if (this.tituloTarefa.length) {
        this.adicionarTarefa(this.tituloTarefa);
        this.tituloTarefa = "";
        this.adicionou = true;
      } else {
        this.erro = true;
      }
    },
    deletarTarefa({ id }) {
      this.excluirTarefa(id);
      this.excluiu = true;
    },
  },
};
</script>
