<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex v-for="(note, index) in filteredNotes" :key="index" xs4>
        <Note :id="note.id" :title="note.title" :description="note.description" :archived="note.archived" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

import Note from '~/components/note'

export default {
  components: {
    Note
  },
  props: {
    archived: { type: Boolean, default: false }
  },
  computed: {
    ...mapState({
      notes: state => state.notes.all
    }),
    filteredNotes() {
      return this.notes.filter(note => note.archived === this.archived)
    }
  }
}
</script>
