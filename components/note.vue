<template>
  <v-card @mouseenter="isHovered = true" @mouseleave="isHovered = false">
    <v-card-text>
      <p class="body-2">
        {{ title }}
      </p>

      <p>{{ description }}</p>
    </v-card-text>

    <v-card-actions v-if="isHovered">
      <v-btn color="grey darken-1" flat icon>
        <v-icon v-if="isArchived" @click="unarchiveNote">
          unarchive
        </v-icon>
        <v-icon v-else @click="archiveNote">
          archive
        </v-icon>
      </v-btn>

      <v-btn color="red lighten-1" flat icon @click="deleteNote">
        <v-icon>delete</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    id: { type: String, default: '' },
    title: { type: String, default: '' },
    description: { type: String, default: '' },
    isArchived: { type: Boolean, default: false }
  },
  data() {
    return {
      isHovered: false
    }
  },
  methods: {
    ...mapMutations(['ARCHIVE_NOTE', 'DELETE_NOTE', 'UNARCHIVE_NOTE']),
    archiveNote() {
      this.ARCHIVE_NOTE({ id: this.id })
    },
    deleteNote() {
      this.DELETE_NOTE({ id: this.id })
    },
    unarchiveNote() {
      this.UNARCHIVE_NOTE({ id: this.id })
    }
  }
}
</script>
