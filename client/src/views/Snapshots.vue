<template>
  <div style="padding-top: 100px">
    <v-container>
      <div class="py-1">
        <h1 style="color: white; font-size: 70px; text-align: center; font-weight:bold">SNAPSHOTS!</h1>
      </div>
      <div class="py-8">
        <h1 style="font-size:13pt; color:black; padding-top: 30px">
          You can find background information about topics relevant to the
          Master Plan here. As part of the Master Plan process, stakeholders and
          town employees were interviewed and a wide range of information and
          data was collected. The Existing Conditions reports are a
          comprehensive set of documents that define the current situation in
          Carlisle and form the basis for the Master Plan recommendations. The
          reports posted here are drafts from the March 4th public meeting. The
          MPSC is currently updating and finalizing the reports and will post
          them here when complete.
        </h1>
      </div>
      <v-row>
        <v-col cols="4">
          <v-card height="300px" ripple outlined hover tile>
            <v-card-title
              style="color: #3949AB; font-weight:bold"
              class="justify-center"
            >Demographics</v-card-title>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card height="300px" ripple outlined hover tile>
            <v-card-title
              style="color: #3949AB; font-weight:bold"
              class="justify-center"
            >Economic Context</v-card-title>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card height="300px" ripple outlined hover tile>
            <v-card-title style="color: #3949AB; font-weight:bold" class="justify-center">Housing</v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-card height="300px" ripple outlined hover tile>
            <v-card-title style="color: #3949AB; font-weight:bold" class="justify-center">
              Historic and Cultural
              <br />Resources
            </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card height="300px" ripple outlined hover tile>
            <v-card-title
              style="color: #3949AB; font-weight:bold"
              class="justify-center"
            >Transportation</v-card-title>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card height="300px" ripple outlined hover tile>
            <v-card-title
              style="color: #3949AB; font-weight:bold"
              class="justify-center"
            >Sustainability</v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-card height="300px" ripple outlined hover tile>
            <v-card-title
              class="justify-center"
              style="color: #3949AB; font-weight:bold"
              text-alligen-center
            >
              <div style="text-align:center">
                Open Space, Recreation
                <br />& Natural Resources
              </div>
            </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card height="300px" ripple outlined hover tile>
            <v-card-title style="color: #3949AB; font-weight:bold" class="justify-center">
              <div style="text-align:center">
                Public Facilities
                <br />& Infrastructure
              </div>
            </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card height="300px" ripple outlined hover tile>
            <v-card-title
              class="justify-center"
              style="color: #3949AB; font-weight:bold"
            >Land Use and Zoning</v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-col cols="4">
          <v-card height="300px" ripple outlined hover tile>
            <v-card-title style="color: #3949AB; font-weight:bold" class="justify-center">School</v-card-title>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card height="300px" ripple outlined hover tile>
            <v-card-title style="color: #3949AB; font-weight:bold" class="justify-center">Governance</v-card-title>
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
