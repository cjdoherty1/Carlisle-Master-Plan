<template>
  <div style="padding-top: 100px">
    <v-container>
      <div class="py-1">
        <h1
          style="color: white; font-size: 70px; text-align: center; font-weight:bold"
        >
          PROJECT INFO!
        </h1>
      </div>
      <div style="padding-top: 40px">
        <v-row>
          <v-col cols="4" />
          <v-col cols="4">
            <v-btn
              outlined
              style="width: 100%"
              color="#3949AB"
              dark
              elevation="4"
              href="https://www.carlislemosquito.org/"
              target="_blank"
              >Click To Mosquito For Latest News</v-btn
            >
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="4">
            <v-card height="300px">
              <v-card-title class="justify-center">FAQ</v-card-title>
              <v-card-text
                >Find answers to your questions related to the Master Plan
                process and purpose here. Don’t see what you are looking for?
                Send us your questions!</v-card-text
              >
              <v-card-actions class="justify-center">
                <v-btn
                  color="#3949AB"
                  dark
                  elevation="4"
                  style="width: 50%"
                  absolute
                  bottom="true"
                  >Click For More</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card height="300px">
              <v-card-title class="justify-center"
                >Presentations and Materials</v-card-title
              >
              <v-card-text align="center">Filler</v-card-text>
              <v-card-actions class="justify-center">
                <v-btn
                  color="#3949AB"
                  dark
                  elevation="4"
                  style="width: 50%"
                  absolute
                  bottom="true"
                  >Click For More</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card height="300px">
              <v-card-title class="justify-center"
                >Master Plan Committees</v-card-title
              >
              <v-card-text align="center">Filler</v-card-text>
              <v-card-actions class="justify-center">
                <v-btn
                  color="#3949AB"
                  dark
                  elevation="4"
                  style="width: 50%"
                  absolute
                  bottom="true"
                  >Click For More</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="4" />
          <v-col cols="4">
            <v-btn
              color="#3949AB"
              dark
              outlined
              elevation="4"
              style="width: 100%"
              >Click For Background Documents</v-btn
            >
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  components: {}
});
</script>
