<template>
  <div>
    <v-img
      :src="require('@/assets/Carlisle Center Aerial.png')"
      eager
      alt="Great Brook Banner"
      width="100%"
      height="100vh"
    >
      <h1
        style="font-size:60pt; text-align:center; margin-top:260px; color: white"
      >
        <strong>Carlisle Forward Master Plan</strong>
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
        ><strong>Click Here to Help Plan Carlisle's Future!</strong></v-btn
      >
    </v-img>
    <v-container>
      <v-row>
        <v-col cols="4">
          <v-card flat height="575px">
            <v-card-title
              style="color: #3949AB; font-size: 30px"
              class="layout justify-center"
              ><strong>WELCOME!</strong></v-card-title
            >
            <div style="height: 425px; overflow-y:scroll;">
              <v-card-text style="color: #1B5E20" class="py-2">
                The Town of Carlisle is undertaking a comprehensive master
                planning process, entitled “Carlisle Forward: Path to a
                Sustainable Future”. The purpose of the project is to develop a
                community-driven strategy that will guide decision-making
                regarding planning policy, investment priorities, and town
                initiatives for Carlisle. Ultimately, we will create a document
                that:
              </v-card-text>
              <v-card-text style="color: #1B5E20" class="py-0">
                • Sets forth our shared vision, values and goals for Carlisle in
                the long-term.
              </v-card-text>
              <v-card-text style="color: #1B5E20" class="py-0"
                >• Includes planning recommendations for achieving our vision
                and goals.
              </v-card-text>
              <v-card-text style="color: #1B5E20" class="py-0"
                >• Includes an implementation action plan for getting things
                done in the short-term.
              </v-card-text>
              <v-card-text style="color: #1B5E20" class="py-2">
                The all-volunteer Master Plan Steering Committee (MPSC), is
                working to engage the community in a conversation about our
                shared values and collective vision for Carlisle’s future.
              </v-card-text>
              <v-card-text
                style="color: #1B5E20; font-weight:bold"
                class="py-2"
              >
                We need you and we want to hear your ideas!
              </v-card-text>
            </div>
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
              ><strong>UPCOMING EVENTS</strong></v-card-title
            >
            <v-card-text style="color: #1B5E20">
              Here you can find many different ways to participate in the Master
              Plan process. Sign up for Updates, post your comments on the Idea
              Wall, put a pin and comment on the Interactive Map, or join in on
              one of the Discussions underway below. Your input is critical to
              the success of the Master Plan. Interested in volunteering? We are
              always looking for community members to help. Let us know here.
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
