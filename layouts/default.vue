<template>
  <v-app>
    <v-toolbar color="amber" absolute app clipped-left>
      <v-toolbar-side-icon />

      <div>
        <span>Ikado</span>
        <span>Notizen</span>
      </div>
    </v-toolbar>

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
        <v-list-tile to="/">
          <v-list-tile-avatar>
            <v-icon>lightbulb_outline</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>
              Notizen
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile to="/archive">
          <v-list-tile-avatar>
            <v-icon>archive</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>
              Archiv
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
export default {}
</script>
