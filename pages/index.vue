<template>
  <v-container>
    <Notes />

    <AddNote />
  </v-container>
</template>

<script>
import AddNote from '~/components/add-note'
import Notes from '~/components/notes'

export default {
  components: {
    AddNote,
    Notes
  }
}
</script>
