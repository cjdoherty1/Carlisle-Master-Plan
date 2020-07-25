<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="4" />
        <v-col cols="4">
          <v-card>
            <h1 style="font-size:30pt; text-align:center;" class="py-2">
              Project Info
            </h1>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="4" />
        <v-col cols="4">
          <v-btn
            outlined
            style="width: 100%"
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
            <v-card-text align="center">Filler</v-card-text>
            <v-card-actions class="justify-center">
              <v-btn outlined style="width: 50%" absolute bottom="true"
                >Click For More</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card height="300px">
            <v-card-title class="justify-center">Schedule</v-card-title>
            <v-card-text align="center">Filler</v-card-text>
            <v-card-actions class="justify-center">
              <v-btn outlined style="width: 50%" absolute bottom="true"
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
              <v-btn outlined style="width: 50%" absolute bottom="true"
                >Click For More</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="4" />
        <v-col cols="4">
          <v-btn outlined style="width: 100%"
            >Click For Background Documents</v-btn
          >
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
