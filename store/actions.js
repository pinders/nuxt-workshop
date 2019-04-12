import { getNotesFromAPI, someAPICall } from '~/api'

export default {
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

  async GET_NOTES({ commit, state }) {
    if (!state.gotNotes) {
      const notes = await getNotesFromAPI()

      commit('SET_NOTES', notes)
      commit('GOT_NOTES')
    }
  },

  async UNARCHIVE_NOTE({ commit }, note) {
    await someAPICall()

    commit('UNARCHIVE_NOTE', note)
  }
}
