<template>
  <v-dialog max-width="512">
    <template v-slot:activator="{ on }">
      <v-btn
        color="primary"
        bottom
        fab
        fixed
        right
        v-on="on"
      >
        <v-icon>add</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="headline">
        Neue Notiz hinzufügen
      </v-card-title>

      <v-card-text>
        <v-text-field v-model="title" label="Titel der Notiz" box />
        <v-textarea
          v-model="description"
          label="Beschreibung der Notiz"
          box
        />
      </v-card-text>
      <v-card-actions>
        <v-btn
          :loading="isAddingNote"
          color="primary"
          block
          large
          @click="addNote"
        >
          Neue Notiz hinzufügen
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      title: '',
      description: '',
      isAddingNote: false
    }
  },
  methods: {
    ...mapActions({
      addNoteAction: 'notes/addNote'
    }),
    async addNote() {
      this.isAddingNote = true

      const id = new Date().getTime()

      await this.addNoteAction({
        id,
        title: this.title,
        description: this.description,
        isArchived: false
      })

      this.title = ''
      this.description = ''

      this.isAddingNote = false
    }
  }
}
</script>
