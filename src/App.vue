<template>
  <v-app style="backgroundColor: #D3D3D3">
    <v-app-bar app color="#1E2011" dark height="85">
      <div style="padding-bottom: 10px;">
        <v-img
          :src="require('@/assets/Carlisle_Seal.png')"
          alt="Carlisle Seal"
          contain
          height="80"
        />
      </div>
      <v-spacer></v-spacer>
      <v-btn tile text width="15%" height="85px" to="/">Home</v-btn>
      <v-btn tile text width="15%" height="85px" to="/participate"
        >Participate</v-btn
      >
      <v-btn tile text width="15%" height="85px" to="/snapshots"
        >Snapshots</v-btn
      >
      <v-btn tile text width="15%" height="85px" to="/project_info"
        >Project Info</v-btn
      >
      <v-btn tile text width="15%" height="85px" to="/contact">Contact</v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  components: {},

  data: () => ({
    //
  })
});
</script>
