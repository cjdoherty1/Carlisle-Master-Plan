<template>
  <div>
    <v-img
      :src="require('@/assets/Carlisle Center Aerial.png')"
      alt="Great Brook Banner"
      height="760px"
    >
      <h1
        style="font-size:60pt; text-align:center; margin-top:200px; color: white"
      >
        Carlisle Forward Master Plan
      </h1>
      <v-btn
        color="#3949AB"
        dark
        x-large="true"
        absolute
        top
        :style="{ left: '50%', transform: 'translateY(850%) translateX(-50%)' }"
        >Click Here to Help Plan Carlisle's Future!</v-btn
      >
    </v-img>
    <v-container>
      <v-row>
        <v-col cols="4">
          <v-card height="400px">
            <v-card-title class="layout justify-center">Welcome</v-card-title>
            <v-card-text>
              Mom's spaghetti, knees weak arms are heavy, there's vomit on the
              sweater alread, palm's are sweaty, he's nervous but on the surface
              he looks calm and ready.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
          <project-updates />
        </v-col>
        <v-col cols="4">
          <v-card height="400px">
            <v-card-title class="layout justify-center"
              >Upcoming Events</v-card-title
            >
            <v-card-text>
              Mom's spaghetti, knees weak arms are heavy, there's vomit on the
              sweater alread, palm's are sweaty, he's nervous but on the surface
              he looks calm and ready.
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
