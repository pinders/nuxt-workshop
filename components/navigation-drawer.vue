<template>
  <v-navigation-drawer
    :value="isVisible"
    class="transparent"
    app
    clipped
    fixed
    floating
    stateless
  >
    <v-list>
      <v-list-tile v-for="(item, index) in items" :key="index" :to="item.to">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            {{ item.text }}
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    isVisible: { type: Boolean, default: true }
  },
  data() {
    return {
      items: [
        { icon: 'lightbulb_outline', text: 'Notizen', to: '/' },
        { icon: 'archive', text: 'Archiv', to: '/archive' }
      ]
    }
  }
}
</script>
