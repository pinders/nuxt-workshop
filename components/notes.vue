<template>
  <v-container grid-list-xl>
    <v-layout wrap>
      <v-flex v-for="note in notes" :key="note.id" xs4>
        <v-card>
          <v-card-text>
            <p class="body-2">
              {{ note.title }}
            </p>

            <p>{{ note.description }}</p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
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
