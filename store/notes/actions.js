const getNotesFromAPI = () => new Promise(resolve => setTimeout(() => resolve([
  {
    id: '1',
    title: 'Notiz 1',
    description: 'Das ist meine erste Notiz',
    isArchived: false
  },
  {
    id: '2',
    title: 'Notiz 2',
    description: 'Das ist meine zweite Notiz',
    isArchived: true
  },
  {
    id: '3',
    title: 'Notiz 3',
    description: 'Das ist meine dritte Notiz',
    isArchived: true
  }
]), 2000))

const someAPICall = () => new Promise(resolve => setTimeout(resolve, 2000))

export default {
  async loadNotes({ commit, state }) {
    if (!state.hasLoadedAllNotes) {
      const notes = await getNotesFromAPI()

      commit('setNotes', notes)
      commit('setHasLoadedAllNotes', true)
    }
  },

  async addNote({ commit }, note) {
    await someAPICall()

    commit('addNote', note)
  },

  async archiveNote({ commit }, note) {
    await someAPICall()

    commit('archiveNote', note)
  },

  async deleteNote({ commit }, note) {
    await someAPICall()

    commit('deleteNote', note)
  },

  async unarchiveNote({ commit }, note) {
    await someAPICall()

    commit('unarchiveNote', note)
  }
}
