<template>
  <v-card>
    <v-card-text>
      <p class="body-2">
        {{ title }}
      </p>

      <p>{{ description }}</p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    id: { type: String, default: '' },
    title: { type: String, default: '' },
    description: { type: String, default: '' }
  }
}
</script>
