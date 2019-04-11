<template>
  <v-app>
    <NavigationDrawer :is-visible="isDrawerVisible" />

    <Toolbar @navigation-drawer-toggled="isDrawerVisible = !isDrawerVisible" />

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
      isDrawerVisible: true
    }
  }
}
</script>
