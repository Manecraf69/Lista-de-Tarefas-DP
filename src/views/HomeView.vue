<template>
  <div class="home">
    <InputTarefa @adicionarTarefa="criarTarefa" />

    <v-list color="transparent" class="pt-0" flat>
      <section align="center" class="mt-16 pt-16" v-if="!tarefas.length">
        <v-icon color="teal lighten-3" size="64px">mdi-playlist-check</v-icon>
        <h1 class="teal--text text--lighten-3">Não há tarefas</h1>
      </section>

      <section v-else v-for="tarefa in tarefas" :key="tarefa.id">
        <ListarTarefas
          @finalizarTarefa="verificarTema"
          @apagarTarefa="deletarTarefa"
          :tarefa="tarefa"
        />

        <v-divider></v-divider>
      </section>
    </v-list>

    <Notificacao :texto="textoNotificacao" :color="color" />
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import InputTarefa from "@/components/InputTarefa.vue";
import ListarTarefas from "@/components/ListarTarefas.vue";
import Notificacao from "@/components/Notificacao.vue";

export default {
  name: "Home",
  components: { InputTarefa, ListarTarefas, Notificacao },
  data: () => ({
    textoNotificacao: "",
    color: "",
    on: false,
  }),
  computed: {
    ...mapState("todo", ["tarefas"]),
  },
  methods: {
    ...mapMutations("todo", ["adicionarTarefa", "excluirTarefa"]),

    chamarNotificaçoo(texto, cor) {
      this.textoNotificacao = texto;
      this.color = cor;
      this.on = true;
    },
    verificarTema({ feita }) {
      if (this.$vuetify.theme.dark && feita) {
        return "rounded teal darken-4";
      } else if (feita) {
        return "rounded teal lighten-4";
      } else {
        return "rounded";
      }
    },
    criarTarefa(tituloTarefa) {
      if (tituloTarefa === null) {
        this.chamarNotificaçoo(
          "Escreva algo para adicionar uma terafa!",
          "warning"
        );
      } else if (!tituloTarefa.length) {
        this.chamarNotificaçoo(
          "Escreva algo para adicionar uma terafa!",
          "warning"
        );
      } else {
        this.adicionarTarefa(tituloTarefa);
        this.chamarNotificaçoo("Tarefa adicionada!", "teal");
      }
    },
    deletarTarefa({ id }) {
      this.excluirTarefa(id);
      this.chamarNotificaçoo("Tarefa excluida!", "red lighten-3");
    },
  },
};
</script>
