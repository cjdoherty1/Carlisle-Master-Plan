<template>
  <div>
    <v-img
      :src="require('@/assets/Great_Brook_Banner.png')"
      alt="Great Brook Banner"
      height="300px"
    >
    </v-img>
    <v-container>
      <v-row>
        <v-col cols="4">
          <v-card>
            <v-card-title> Welcome </v-card-title>
            <v-card-text>
              Mom's spaghetti, knees weak arms are heavy, there's vomit on the sweater alread, palm's are sweaty, he's nervous but on the surface he looks calm and ready.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
          <project-updates> </project-updates>
        </v-col>
        <v-col cols="4">
          <v-card>
            <v-card-title> Upcoming Events </v-card-title>
            <v-card-text>
              Mom's spaghetti, knees weak arms are heavy, there's vomit on the sweater alread, palm's are sweaty, he's nervous but on the surface he looks calm and ready.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectUpdates from "../components/ProjectUpdates.vue";
export default Vue.extend({
  components: {
    ProjectUpdates
  }
});
</script>
