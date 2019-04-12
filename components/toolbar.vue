<template>
  <v-toolbar color="amber" absolute app clipped-left>
    <v-toolbar-side-icon @click="() => $emit('navigation-drawer-toggled')" />

    <IkadoKeepLogo />
  </v-toolbar>
</template>

<script>
import IkadoKeepLogo from './ikado-keep-logo'

export default {
  components: {
    IkadoKeepLogo
  }
}
</script>
