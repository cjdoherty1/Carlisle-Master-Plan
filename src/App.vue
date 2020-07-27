<template>
  <v-app style="backgroundColor: #D3D3D3">
    <v-app-bar color="transparent" dark height="90" absolute top>
      <div style="padding-bottom: 10px; padding-top: 10px">
        <v-img
          class="py-2"
          :src="require('@/assets/Dark Blue_SustainablePath.png')"
          alt="Carlise Master Plan"
          contain
          height="500"
          width="150"
        />
      </div>
      <v-spacer></v-spacer>
      <v-btn tile text width="14%" height="85px" to="/">
        <v-img
          :src="require('@/assets/home.png')"
          alt="Home"
          contain
          height="50"
          width="20"
          absolute
          top
          :style="{ left: '7%', transform: 'translateY(0%) translateX(-50%)' }"
        >
          <div
            absolute
            top
            :style="{ transform: 'translateY(105%) translateX(70%)' }"
          >
            Home
          </div>
        </v-img>
      </v-btn>
      <v-btn tile text width="17%" height="85px" to="/participate">
        <v-img
          :src="require('@/assets/participate.png')"
          alt="Carlise Master Plan"
          contain
          height="50"
          width="20"
          absolute
          top
          :style="{ left: '6%', transform: 'translateY(0%) translateX(-50%)' }"
        >
          <div
            absolute
            top
            :style="{ transform: 'translateY(105%) translateX(70%)' }"
          >
            participate
          </div>
        </v-img>
      </v-btn>
      <v-btn tile text width="17%" height="85px" to="/snapshots"
        >Snapshots</v-btn
      >
      <v-btn tile text width="17%" height="85px" to="/project_info"
        >Project Info</v-btn
      >
      <v-btn tile text width="17%" height="85px" to="/contact">Contact</v-btn>
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
