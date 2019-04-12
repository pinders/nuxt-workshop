<template>
  <v-navigation-drawer
    :value="true"
    class="transparent"
    app
    clipped
    fixed
    floating
    stateless
  >
    <v-list>
      <v-list-tile v-for="item in items" :key="item.to" :to="item.to">
        <v-list-tile-avatar>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-avatar>
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
