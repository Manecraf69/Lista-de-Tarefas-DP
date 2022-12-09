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
    <v-snackbar v-model="adicionou" timeout="2000">
      Tarefa adicionada!

      <template #action="{ attrs }">
        <v-btn color="teal" text v-bind="attrs" @click="adicionou = false">
          Fechar
        </v-btn>
      </template>
    </v-snackbar>
    <v-snackbar v-model="erro" timeout="2000">
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
    tituloTarefa: "",
    adicionou: false,
    erro: false,
  }),
  computed: {
    ...mapState("todo", ["tarefas"]),
  },
  methods: {
    ...mapMutations("todo", ["adicionarTarefa", "excluirTarefa"]),

    criarTarefa() {
      if (this.tituloTarefa.length) {
        this.adicionarTarefa(this.tituloTarefa);
        this.tituloTarefa = "";
        this.adicionou = true;
      } else {
        this.erro = true;
      }
    },
  },
};
</script>
