<template>
  <v-app>
    <v-toolbar color="amber" absolute app clipped-left>
      <v-toolbar-side-icon />

      <div>
        <span>Ikado</span>
        <span>Notizen</span>
      </div>
    </v-toolbar>

    <v-content>
      <v-container grid-list-xl>
        <v-layout wrap>
          <v-flex xs4>
            <v-card>
              <v-card-text>
                <p class="body-2">
                  Notiz 1
                </p>

                <p>Test</p>
              </v-card-text>
            </v-card>
          </v-flex>

          <v-flex xs4>
            <v-card>
              <v-card-text>
                <p class="body-2">
                  Notiz 2
                </p>

                <p>Test</p>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {}
</script>
