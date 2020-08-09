<template>
  <div style="padding-top: 100px">
    <v-container>
      <div class="py-1">
        <h1
          style="color: white; font-size: 70px; text-align: center; font-weight:bold"
        >
          PARTICIPATE!
        </h1>
      </div>
      <div class="py-8">
        <h1 style="font-size:15pt; color:grey; padding-top: 30px">
          Here you can find many different ways to participate in the Master
          Plan process. Sign up for Updates, post your comments on the Idea
          Wall, put a pin and comment on the Interactive Map, or join in on one
          of the Discussions underway below. Your input is critical to the
          success of the Master Plan. Interested in volunteering? We are always
          looking for community members to help. Let us know here!
        </h1>
      </div>

      <v-row>
        <v-col cols="4">
          <v-card height="200px">
            <v-card-title
              style="color: #3949AB; font-weight:bold"
              class="justify-center"
              >Sign Up For Updates</v-card-title
            >
              <div style="margin:auto; width:50%; padding-left:5%; padding-top:10px;">
                <v-icon x-large color="#81C784" style="padding-left:50px">mdi-checkbox-marked-outline</v-icon>
              </div>
            <v-card-actions class="justify-center">
              
              <v-btn
                color="#3949AB"
                dark
                elevation="4"
                style="width: 50%"
                absolute
                bottom="true"
                >Click to Sign Up</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card height="200px">
            <v-card-title
              style="color: #3949AB; font-weight:bold"
              class="justify-center"
              >Idea Wall</v-card-title
            >
            <div style="margin:auto; width:50%; padding-left:5%; padding-top:10px;">
                <v-icon x-large color="#81C784" style="padding-left:50px">mdi-lightbulb-on-outline</v-icon>
              </div>
            <v-card-actions class="justify-center">
              <v-btn
                absolute
                bottom="true"
                color="#3949AB"
                dark
                elevation="4"
                style="width: 50%;"
                to="/ideawall"
                >Click to submit</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card height="200px">
            <v-card-title
              style="color: #3949AB; font-weight:bold"
              class="justify-center"
              >Input Map</v-card-title
            >

            <div style="margin:auto; width:50%; padding-left:5%; padding-top:10px;">
                <v-icon x-large color="#81C784" style="padding-left:50px">mdi-map</v-icon>
              </div>
            <v-card-actions class="justify-center">
              <v-btn
                absolute
                bottom="true"
                color="#3949AB"
                dark
                elevation="4"
                style="width: 50%;"
                router-link
                to="/inputmap"
                >Click to input</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="4">
          <v-card height="200px">
            <v-card-title
              style="color: #3949AB; font-weight:bold"
              class="justify-center"
              >Discussion: Housing</v-card-title
            >
            <v-card-text
              style="color: #1B5E20"
              align="center"
              class="justify-center"
              >Tell us what you think!</v-card-text
            >
            <div style="margin:auto; width:50%; padding-left:5%;">
                <v-icon x-large color="#81C784" style="padding-left:50px">mdi-home-group</v-icon>
            </div>
            <v-card-actions class="justify-center">
              <v-btn
                color="#3949AB"
                dark
                elevation="4"
                style="width: 50%"
                absolute
                bottom="true"
                to="/discussion"
                >Link to Discussion</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card height="200px">
            <v-card-title
              style="color: #3949AB; font-weight:bold"
              class="justify-center"
              >Discussion: Community</v-card-title
            >
            <v-card-text
              style="color: #1B5E20"
              align="center"
              class="justify-center"
              >Tell us what you think!</v-card-text
            >
            <div style="margin:auto; width:50%; padding-left:5%;">
                <v-icon x-large color="#81C784" style="padding-left:50px">mdi-account-group</v-icon>
            </div>
            <v-card-actions class="justify-center">
              <v-btn
                color="#3949AB"
                dark
                elevation="4"
                style="width: 50%"
                absolute
                bottom="true"
                to="/discussion"
                >Link to Discussion</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card height="200px">
            <v-card-title
              style="color: #3949AB; font-weight:bold"
              class="justify-center"
              >Discussion</v-card-title
            >
            <v-card-text
              style="color: #1B5E20"
              align="center"
              class="justify-center"
              >Tell us what you think!</v-card-text
            >
            <div style="margin:auto; width:50%; padding-left:5%;">
                <v-icon x-large color="#81C784" style="padding-left:50px">mdi-comment-account</v-icon>
            </div>
            <v-card-actions class="justify-center">
              <v-btn
                color="#3949AB"
                dark
                elevation="4"
                style="width: 50%"
                absolute
                bottom="true"
                to="/discussion"
                >Link to Discussion</v-btn
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
export default Vue.extend({
  components: {}
});
</script>
