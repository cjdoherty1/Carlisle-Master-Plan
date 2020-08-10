<template>
  <div style="padding-top: 100px">
    <v-container>
      <div class="py-1">
        <h1
          style="color: white; font-size: 70px; text-align: center; font-weight:bold"
        >
          SNAPSHOTS!
        </h1>
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
            <v-img src="@/assets/demographics.jpg" height="300" class="text align-end">
              <v-card-title style="color: white; font-weight:bold; font-size: 25pt" class="strokeme">Demographics</v-card-title>
            </v-img>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card height="300px" ripple outlined hover tile>
            <v-img src="@/assets/economic.jpg" height="300" class="text align-end">
              <v-card-title style="color: white; font-weight:bold; font-size:25pt" class="strokeme">Economic Context</v-card-title>
            </v-img>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card height="300px" ripple outlined hover tile>
            <v-img src="@/assets/ferns.jpg" height="300" class="text align-end">
              <v-card-title style="color: white; font-weight:bold; font-size:25pt" class="strokeme">Housing</v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-card height="300px" ripple outlined hover tile>
            <v-img src="@/assets/historic.jpg" height="300" class="text align-end">
            <v-card-title style="color: white; font-weight:bold; font-size: 25pt" class="strokeme">
              <div>
                Historic & Cultural
                <br />Resources
              </div>
            </v-card-title>
            </v-img>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card height="300px" ripple outlined hover tile>
            <v-img src="@/assets/transportation.jpg" height="300" class="text align-end">
            <v-card-title
              style="color: white; font-weight:bold; font-size:25pt" class="strokeme"
            >Transportation</v-card-title>
            </v-img>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card height="300px" ripple outlined hover tile>
            <v-img src="@/assets/sustain.jpg" height="300" class="text align-end">
            <v-card-title
              style="color: white; font-weight:bold; font-size:25pt" class="strokeme"
            >Sustainability</v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-card height="300px" ripple outlined hover tile>
            <v-img
              gradient
              :src="
                require('@/assets/Great_Brook_Farm_State_Park,_Carlisle_MA.png')
              "
              height="300"
              class="white--text align-end"
            >
              <v-card-title
                style="font-weight:bold; font-size: 25pt" class="strokeme"
              >
                <div>
                  Recreation
                  & <br /> Natural Resources
                </div>
              </v-card-title>
            </v-img>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card height="300px" ripple outlined hover tile>
            <v-img
              gradient
              :src="require('@/assets/Library_-_Carlisle,_MA_-_IMG_1037.png')"
              height="300"
              class="white--text align-end"
            >
              <v-card-title style="font-weight:bold; font-size:25pt" class="strokeme">
                <div>
                  Public Facilities
                  <br />& Infrastructure
                </div>
              </v-card-title></v-img
            >
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card height="300px" ripple outlined hover tile>
            <v-img
              gradient
              :src="require('@/assets/Europe_land_use_map.png')"
              height="300"
              class="white--text align-end"
              ><v-card-title style="font-weight:bold; font-size:25pt" class="strokeme"
                >Land Use & Zoning</v-card-title
              ></v-img
            >
          </v-card>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-col cols="4">
          <v-card height="300px" ripple outlined hover tile>
            <v-img
              gradient
              :src="require('@/assets/CPS_1520x656.png')"
              height="300"
              class="white--text align-end"
              ><v-card-title style="font-weight:bold; font-size:25pt" class="strokeme"
                >School</v-card-title
              ></v-img
            >
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card height="300px" ripple outlined hover tile>
            <v-img
              gradient
              :src="
                require('@/assets/Corporate-governance-A-pathway-to-sustainability-strategy.png')
              "
              height="300"
              class="white--text align-end"
              ><v-card-title style="font-weight:bold; font-size:25pt" class="strokeme"
                >Governance</v-card-title
              ></v-img
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.strokeme
{
    color: white;
    text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;  
}
</style>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  components: {}
});
</script>
