export default {
  activeNotes(state) {
    return state.notes.filter(note => !note.isArchived)
  },
  archivedNotes(state) {
    return state.notes.filter(note => note.isArchived)
  }
}
