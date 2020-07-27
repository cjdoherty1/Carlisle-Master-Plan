<template>
  <div>
    <v-img
      :src="require('@/assets/Carlisle Center Aerial.png')"
      alt="Great Brook Banner"
      height="760px"
    >
      <h1
        style="font-size:60pt; text-align:center; margin-top:260px; color: white"
      >
        Carlisle Forward Master Plan
      </h1>
      <v-btn
        color="#3949AB"
        dark
        x-large="true"
        elevation="24"
        absolute
        top
        :style="{
          left: '50%',
          transform: 'translateY(1000%) translateX(-50%)'
        }"
        >Click Here to Help Plan Carlisle's Future!</v-btn
      >
    </v-img>
    <v-container>
      <v-row>
        <v-col cols="4">
          <v-card flat height="575px">
            <v-card-title
              style="color: #3949AB; font-size: 30px"
              class="layout justify-center"
              >WELCOME!</v-card-title
            >
            <v-card-text style="color: #1B5E20" class="py-2">
              The Town of Carlisle is undertaking a comprehensive, community-led
              master planning process, entitled “Carlisle Forward: Path to a
              Sustainable Future”. The town is working to engage all facets of
              the community in a conversation about our shared values and
              collective vision for Carlisle as we navigate the coming decades.
              In order to do this, we need YOU!
            </v-card-text>
            <v-card-text style="color: #1B5E20" class="py-0">
              The purpose of the project is to develop a community-driven
              strategy to be used to guide decision-making regarding land use
              policy, investment priorities, and town initiatives in our
              community. Ultimately, we will create a document that:
            </v-card-text>
            <v-card-text style="color: #1B5E20" class="py-0"
              >• Sets forth our shared vision and goals for
              Carlisle.</v-card-text
            >
            <v-card-text style="color: #1B5E20" class="py-0">
              • Includes recommendations for achieving our vision and goals.
            </v-card-text>
            <v-card-text style="color: #1B5E20" class="py-0">
              • Includes an implementation action plan for getting things done.
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn
                color="#3949AB"
                dark
                elevation="24"
                width="80%"
                absolute
                bottom
                >Participate!</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="4">
          <project-updates />
        </v-col>
        <v-col cols="4">
          <v-card flat height="575px">
            <v-card-title
              style="color: #3949AB; font-size: 30px"
              class="layout justify-center"
              >Upcoming Events</v-card-title
            >
            <v-card-text style="color: #1B5E20">
              Mom's spaghetti, knees weak arms are heavy, there's vomit on the
              sweater alread, palm's are sweaty, he's nervous but on the surface
              he looks calm and ready.
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn
                color="#3949AB"
                dark
                elevation="24"
                width="80%"
                absolute
                bottom
                >Link to Calendar</v-btn
              >
            </v-card-actions>
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
