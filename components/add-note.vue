<template>
  <div>
    <v-btn
      color="primary"
      bottom
      fab
      fixed
      right
      @click="isDialogVisible = true"
    >
      <v-icon>add</v-icon>
    </v-btn>

    <v-dialog v-model="isDialogVisible" max-width="512">
      <v-card>
        <v-card-text>
          <v-text-field v-model="title" label="Titel" />
          <v-textarea v-model="description" label="Beschreibung" />
          <v-btn
            color="primary"
            block
            large
            @click="addNote"
          >
            Notiz hinzufügen
          </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      title: '',
      description: '',
      isDialogVisible: false
    }
  },
  methods: {
    ...mapMutations(['ADD_NOTE']),
    addNote() {
      this.ADD_NOTE({
        id: new Date().getTime().toString(),
        title: this.title,
        description: this.description,
        isArchived: false
      })

      this.title = ''
      this.description = ''
      this.isDialogVisible = false
    }
  }
}
</script>

<style>

</style>
