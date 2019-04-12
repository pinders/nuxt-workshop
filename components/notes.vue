<template>
  <v-container grid-list-xl>
    <v-layout wrap>
      <v-flex v-for="note in notes" :key="note.id" xs4>
        <Note :id="note.id" :title="note.title" :description="note.description" :is-archived="note.isArchived" />
      </v-flex>

      <v-flex v-if="isLoadingNotes" class="text-xs-center" xs12>
        <v-progress-circular indeterminate />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

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
    ...mapGetters(['activeNotes', 'archivedNotes']),
    notes() {
      if (this.isArchived) {
        return this.archivedNotes
      }

      return this.activeNotes
    }
  },
  async created() {
    this.isLoadingNotes = true

    await this.LOAD_NOTES()

    this.isLoadingNotes = false
  },
  methods: mapActions(['LOAD_NOTES'])
}
</script>
