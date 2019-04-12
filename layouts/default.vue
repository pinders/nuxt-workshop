<template>
  <v-app>
    <Toolbar @navigation-drawer-toggled="toggleNavigationDrawer" />

    <NavigationDrawer :is-visible="isNavigationDrawerVisible" />

    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import NavigationDrawer from '~/components/navigation-drawer'
import Toolbar from '~/components/toolbar'

export default {
  components: {
    NavigationDrawer,
    Toolbar
  },
  data() {
    return {
      isNavigationDrawerVisible: true
    }
  },
  methods: {
    toggleNavigationDrawer() {
      this.isNavigationDrawerVisible = !this.isNavigationDrawerVisible
    }
  }
}
</script>
