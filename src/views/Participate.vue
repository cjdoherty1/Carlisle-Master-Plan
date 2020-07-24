<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="4" />
        <v-col cols="4">
          <v-card>
            <h1 style="font-size:30pt; text-align:center;" class="py-2">
              Participate
            </h1>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="4">
          <v-card height="200px">
            <v-card-title class="justify-center"
              >Sign Up For Updates</v-card-title
            >
            <v-card-actions class="justify-center">
              <v-btn outlined style="width: 50%" absolute bottom="true"
                >Click to Sign Up</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card height="200px">
            <v-card-title class="justify-center">Idea Wall</v-card-title>
            <v-card-actions class="justify-center">
              <v-btn outlined style="width: 50%" absolute bottom="true"
                >Click to Submit</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card height="200px">
            <v-card-title class="justify-center">Input Map</v-card-title>
            <v-card-actions class="justify-center">
              <v-btn outlined style="width: 50%" absolute bottom="true"
                >Click to Input</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="4">
          <v-card height="200px">
            <v-card-title class="justify-center"
              >Discussion: Housing</v-card-title
            >
            <v-card-text align="center" class="justify-center">
              Tell us what you think!
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn outlined style="width: 50%" absolute bottom="true"
                >Link to Discussion</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card height="200px">
            <v-card-title class="justify-center"
              >Discussion: Community</v-card-title
            >
            <v-card-text align="center" class="justify-center">
              Tell us what you think!
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn outlined style="width: 50%" absolute bottom="true"
                >Link to Discussion</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card height="200px">
            <v-card-title class="justify-center"
              >Discussion: Recreation</v-card-title
            >
            <v-card-text align="center" class="justify-center">
              Tell us what you think!
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn outlined style="width: 50%" absolute bottom="true"
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
