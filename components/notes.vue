<template>
  <v-container grid-list-xl>
    <v-layout wrap>
      <v-flex v-for="note in notes" :key="note.id" xs4>
        <Note :id="note.id" :title="note.title" :description="note.description" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Note from './note'

export default {
  components: {
    Note
  },
  data() {
    return {
      notes: [
        { id: '1', title: 'Notiz 1', description: 'Test' },
        { id: '2', title: 'Notiz 2', description: 'Test' }
      ]
    }
  }
}
</script>
