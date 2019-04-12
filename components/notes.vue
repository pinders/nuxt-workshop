<template>
  <v-container grid-list-xl>
    <v-layout wrap>
      <v-flex v-for="note in filteredNotes" :key="note.id" xs4>
        <Note :id="note.id" :title="note.title" :description="note.description" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Note from './note'

export default {
  components: {
    Note
  },
  props: {
    isArchived: { type: Boolean, default: false }
  },
  data() {
    return {
      notes: [
        { id: '1', title: 'Notiz 1', description: 'Test', isArchived: false },
        { id: '2', title: 'Notiz 2', description: 'Test', isArchived: true }
      ]
    }
  },
  computed: {
    activeNotes() {
      return this.notes.filter(({ isArchived }) => !isArchived)
    },
    archivedNotes() {
      return this.notes.filter(({ isArchived }) => isArchived)
    },
    filteredNotes() {
      if (this.isArchived) {
        return this.archivedNotes
      }

      return this.activeNotes
    }
  }
}
</script>
