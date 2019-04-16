# Using Vuex for global state
## Tasks
- Extract the data from the `notes.vue` component and store it as vuex state.
- Access the extracted data using the `mapState` helper.
- Convert computed properties from the `notes.vue` component to vuex getters.
- Access the vuex getter using the `mapGetters` helper.
- Write a vuex mutation `ADD_NOTE` that adds a new note and call it from the `add-note.vue` component using the `mapMutations` helper.
- Add mutations for archiving, deleting and unarchiving notes and integrate them into the app (e.g by adding additional buttons).