<template>
  <v-container grid-list-xl>
    <v-layout wrap>
      <v-flex v-for="note in filteredNotes" :key="note.id" xs4>
        <Note :id="note.id" :title="note.title" :description="note.description" :is-archived="note.isArchived" />
      </v-flex>

      <v-flex v-if="isLoadingNotes" class="text-xs-center" xs12>
        <v-progress-circular indeterminate />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import Note from '~/components/note'

export default {
  components: {
    Note
  },
  props: {
    isArchived: { type: Boolean, default: false }
  },
  data() {
    return {
      isLoadingNotes: false
    }
  },
  computed: {
    ...mapState({
      notes: state => state.notes.all
    }),
    filteredNotes() {
      return this.notes.filter(note => note.isArchived === this.isArchived)
    }
  },
  async created() {
    this.isLoadingNotes = true

    await this.loadNotes()

    this.isLoadingNotes = false
  },
  methods: mapActions({
    loadNotes: 'notes/loadNotes'
  })
}
</script>
