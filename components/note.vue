<template>
  <v-card @mouseenter="hovered = true" @mouseleave="hovered = false">
    <v-card-text>
      <p class="body-2">
        {{ title }}
      </p>
      <p>{{ description }}</p>
    </v-card-text>
    <v-card-actions v-if="hovered">
      <v-btn color="grey darken-1" flat icon>
        <v-icon v-if="archived" @click="unarchiveNote({ id })">
          unarchive
        </v-icon>
        <v-icon v-else @click="archiveNote({ id })">
          archive
        </v-icon>
      </v-btn>
      <v-btn color="red lighten-1" flat icon @click="deleteNote({ id })">
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
    archived: { type: Boolean, default: false }
  },
  data() {
    return {
      hovered: false
    }
  },
  methods: mapMutations({
    archiveNote: 'notes/archiveNote',
    deleteNote: 'notes/deleteNote',
    unarchiveNote: 'notes/unarchiveNote'
  })
}
</script>
