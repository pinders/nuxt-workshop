<template>
  <v-toolbar color="amber" absolute app clipped-left>
    <v-toolbar-side-icon @click="toggleNavigationDrawer" />
    <IkadoKeepLogo />
  </v-toolbar>
</template>

<script>
import IkadoKeepLogo from '~/components/ikado-keep-logo'

export default {
  components: {
    IkadoKeepLogo
  },
  methods: {
    toggleNavigationDrawer() {
      this.$emit('navigation-drawer-toggled')
    }
  }
}
</script>
