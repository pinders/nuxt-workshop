export default {
  activeNotes(state) {
    return state.notes.filter(({ isArchived }) => !isArchived)
  },
  archivedNotes(state) {
    return state.notes.filter(({ isArchived }) => isArchived)
  }
}
