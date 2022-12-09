export const todo = {
  namespaced: true,
  state: () => ({
    tarefas: [],
    user: {},
  }),
  mutations: {
    salvarUsuario(state, novoNome) {
      state.user.nome = novoNome;
    },
    adicionarTarefa(state, tituloTarefa) {
      state.tarefas.push({
        id: Date.now(),
        titulo: tituloTarefa,
        feita: false,
      });
    },
    excluirTarefa(state, id) {
      state.tarefas = state.tarefas.filter((tarefa) => tarefa.id !== id);
    },
  },
};
