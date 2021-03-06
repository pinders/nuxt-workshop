export default {
  SET_NOTES(state, notes) {
    state.notes = notes
  },

  HAS_LOADED_NOTES(state) {
    state.hasLoadedNotes = true
  },

  ADD_NOTE(state, note) {
    state.notes.push(note)
  },

  ARCHIVE_NOTE(state, { id }) {
    state.notes = state.notes.map(note => (note.id === id ? ({ ...note, isArchived: true }) : note))
  },

  DELETE_NOTE(state, { id }) {
    state.notes = state.notes.filter(note => note.id !== id)
  },

  UNARCHIVE_NOTE(state, { id }) {
    state.notes = state.notes.map(note => (note.id === id ? ({ ...note, isArchived: false }) : note))
  }
}
