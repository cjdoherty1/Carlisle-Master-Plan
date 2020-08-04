<template>
  <div>
    <v-container>
      <div class="py-8">
        <h1
          style="color: #3949AB; font-size: 70px; text-align: center; font-weight:bold"
        >
          PARTICIPATE!
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
              >Discussion: Recreation</v-card-title
            >
            <v-card-text
              style="color: #1B5E20"
              align="center"
              class="justify-center"
              >Tell us what you think!</v-card-text
            >
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
