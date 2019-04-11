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
      <v-card-title
        class="headline"
        primary-title
      >
        Neue Notiz hinzufügen
      </v-card-title>

      <v-card-text>
        <v-text-field v-model="title" box label="Titel der Notiz" />
        <v-textarea
          v-model="description"
          box
          label="Beschreibung der Notiz"
        />
      </v-card-text>
      <v-card-actions>
        <v-btn
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
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      title: '',
      description: ''
    }
  },
  methods: {
    ...mapMutations({
      addNoteMutation: 'notes/addNote'
    }),
    addNote() {
      const id = new Date().getTime()

      this.addNoteMutation({
        id,
        title: this.title,
        description: this.description,
        archived: false
      })

      this.title = ''
      this.description = ''
    }
  }
}
</script>

<style>

</style>
