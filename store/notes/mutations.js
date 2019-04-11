export default {
  setNotes(state, notes) {
    state.all = notes
  },

  setHasLoadedAllNotes(state, has) {
    state.hasLoadedAllNotes = has
  },

  addNote(state, note) {
    state.all.push(note)
  },

  archiveNote(state, { id }) {
    state.all = state.all.map(note => (note.id === id ? ({ ...note, isArchived: true }) : note))
  },

  deleteNote(state, { id }) {
    state.all = state.all.filter(note => note.id !== id)
  },

  unarchiveNote(state, { id }) {
    state.all = state.all.map(note => (note.id === id ? ({ ...note, isArchived: false }) : note))
  }
}
