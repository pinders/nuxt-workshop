export default {
  addNote(state, note) {
    state.all.push(note)
  },

  archiveNote(state, { id }) {
    state.all = state.all.map(note => (note.id === id ? ({ ...note, archived: true }) : note))
  },

  deleteNote(state, { id }) {
    state.all = state.all.filter(note => note.id !== id)
  },

  unarchiveNote(state, { id }) {
    state.all = state.all.map(note => (note.id === id ? ({ ...note, archived: false }) : note))
  }
}
