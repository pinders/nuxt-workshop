import { getNotesFromAPI, someAPICall } from '~/api'

export default {
  async LOAD_NOTES({ commit, state }) {
    if (!state.hasLoadedNotes) {
      const notes = await getNotesFromAPI()

      commit('SET_NOTES', notes)
      commit('HAS_LOADED_NOTES')
    }
  },

  async ADD_NOTE({ commit }, note) {
    await someAPICall()

    commit('ADD_NOTE', note)
  },

  async ARCHIVE_NOTE({ commit }, note) {
    await someAPICall()

    commit('ARCHIVE_NOTE', note)
  },

  async DELETE_NOTE({ commit }, note) {
    await someAPICall()

    commit('DELETE_NOTE', note)
  },

  async UNARCHIVE_NOTE({ commit }, note) {
    await someAPICall()

    commit('UNARCHIVE_NOTE', note)
  }
}
