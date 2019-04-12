<template>
  <v-card @mouseenter="isHovered = true" @mouseleave="isHovered = false">
    <v-card-text>
      <p class="body-2">
        {{ title }}
      </p>
      <p>{{ description }}</p>
    </v-card-text>
    <v-card-actions v-if="isHovered">
      <v-btn :loading="isArchivingNote || isUnarchivingNote" color="grey darken-1" flat icon>
        <v-icon v-if="isArchived" @click="unarchiveNote">
          unarchive
        </v-icon>
        <v-icon v-else @click="archiveNote">
          archive
        </v-icon>
      </v-btn>

      <v-btn :loading="isDeletingNote" color="red lighten-1" flat icon @click="deleteNote">
        <v-icon>delete</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    id: { type: String, default: '' },
    title: { type: String, default: '' },
    description: { type: String, default: '' },
    isArchived: { type: Boolean, default: false }
  },
  data() {
    return {
      isArchivingNote: false,
      isDeletingNote: false,
      isHovered: false,
      isUnarchivingNote: false
    }
  },
  methods: {
    ...mapActions(['ARCHIVE_NOTE', 'DELETE_NOTE', 'UNARCHIVE_NOTE']),
    async archiveNote() {
      this.isArchivingNote = true

      await this.ARCHIVE_NOTE({ id: this.id })

      this.isArchivingNote = false
    },
    async deleteNote() {
      this.isDeletingNote = true

      await this.DELETE_NOTE({ id: this.id })

      this.isDeletingNote = false
    },
    async unarchiveNote() {
      this.isUnarchivingNote = true

      await this.UNARCHIVE_NOTE({ id: this.id })

      this.isUnarchivingNote = false
    }
  }
}
</script>
