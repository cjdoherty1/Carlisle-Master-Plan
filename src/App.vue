<template>
  <v-app style="backgroundColor: #FFFFFF">
    <v-app-bar
      color="transparent"
      dark
      height="90"
      flat
      elevate-on-scroll="true"
      fixed
      top
    >
      <v-img
        :src="require('@/assets/participate.png')"
        alt="Carlise Master Plan"
        contain
        height="50"
        width="20"
        absolute
        top
        :style="{ left: '42%', transform: 'translateY(0%) translateX(-50%)' }"
      ></v-img>

      <v-img
        :src="require('@/assets/home.png')"
        alt="Home"
        contain
        height="50"
        width="20"
        absolute
        top
        :style="{ left: '9%', transform: 'translateY(0%) translateX(-50%)' }"
      />

      <v-img
        :src="require('@/assets/snapshot.png')"
        alt="Home"
        contain
        height="50"
        width="20"
        absolute
        top
        :style="{ left: '17%', transform: 'translateY(0%) translateX(-50%)' }"
      />

      <v-img
        :src="require('@/assets/info.png')"
        alt="Home"
        contain
        height="50"
        width="20"
        absolute
        top
        :style="{ left: '12%', transform: 'translateY(0%) translateX(-50%)' }"
      />

      <v-img
        :src="require('@/assets/contact.png')"
        alt="Home"
        contain
        height="50"
        width="20"
        absolute
        top
        :style="{ left: '8%', transform: 'translateY(0%) translateX(-50%)' }"
      />
    </v-app-bar>
    <v-app-bar
      color="transparent"
      dark
      height="90"
      elevation="3"
      elevate-on-scroll="true"
      fixed
      top
    >
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
      <v-btn tile text width="15%" height="90px" to="/">Home</v-btn>
      <v-btn tile text width="15%" height="90px" to="/participate"
        >participate</v-btn
      >
      <v-btn tile text width="15%" height="90px" to="/snapshots"
        >Snapshots</v-btn
      >
      <v-btn tile text width="15%" height="90px" to="/project_info"
        >Project Info</v-btn
      >
      <v-btn tile text width="15%" height="90px" to="/contact">Contact</v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<style>
/* width */
::-webkit-scrollbar {
  width: 13px;
  outline-color: #3949ab;
}

/* Track */
::-webkit-scrollbar-track {
  background: #6e6e70;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #3949ab;
}
</style>
<script lang="ts">
import Vue from "vue";
import { VBtn } from "vuetify/lib";

const base = Vue.extend({ mixins: [VBtn] });
export default base.extend({
  name: "myButton",
  extends: VBtn
});
</script>
