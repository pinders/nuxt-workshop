<template>
  <v-app>
    <Toolbar />

    <NavigationDrawer />

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
  }
}
</script>
