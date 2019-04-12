<template>
  <v-container grid-list-xl>
    <v-layout wrap>
      <v-flex v-for="note in notes" :key="note.id" xs4>
        <Note :id="note.id" :title="note.title" :description="note.description" :is-archived="note.isArchived" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

import Note from './note'

export default {
  components: {
    Note
  },
  props: {
    isArchived: { type: Boolean, default: false }
  },
  computed: {
    ...mapGetters(['activeNotes', 'archivedNotes']),
    notes() {
      if (this.isArchived) {
        return this.archivedNotes
      }

      return this.activeNotes
    }
  }
}
</script>
