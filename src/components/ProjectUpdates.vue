<template>
  <v-card flat height="575px">
    <v-card-title
      style="color: #3949AB; font-size: 30px"
      class="layout justify-center"
    >
      <strong>PROJECT UPDATES</strong>
    </v-card-title>
    <div style="height: 425px; overflow-y:scroll;">
      <v-container>
        <div v-for="(update, i) in updates" :key="i">
          <v-divider />
          <v-card flat class="my-2">
            <v-card-title style="color: #3949AB"
              >August 12: Carlisle Forward Next Steps</v-card-title
            >
            <v-card-text style="color: #1B5E20">
              <VClamp :expanded.sync="expanded" :max-lines="1000">
                {{ update }}
                <!--template slot="after" slot-scope="{toggle, expanded, clamped}">
          <v-icon fab v-if="!expanded && clamped" right medium @click="toggle"
            >mdi-plus-box</v-icon
          >
          <v-icon fab v-if="expanded" right medium @click="toggle"
            >mdi-minus-box</v-icon
          >
                </template-->
              </VClamp>
            </v-card-text>
          </v-card>
        </div>
      </v-container>
    </div>
    <v-card-actions class="justify-center">
      <v-btn
        color="#3949AB"
        dark
        elevation="24"
        width="80%"
        absolute
        bottom
        to="/updates"
        >More Updates</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<style>
/* width */
::-webkit-scrollbar {
  width: 13px;
  outline-color: #3949ab;
}

/* Track */
::-webkit-scrollbar-track {
  background: #c1c3cc;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #3949ab;
}
</style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import "vue-property-decorator";
import VClamp from "vue-clamp";
//const VClamp = require("vue-clamp");

@Component({
  components: {
    VClamp
  }
})
export default class ProjectUpdates extends Vue {
  expanded = false;

  get updates(): string[] {
    const ups = [];
    for (let i = 0; i < 1; i++) {
      ups.push(
        "In July 2019, the Master Plan consultant, CivicMoxie, resigned their assignment with the Town of Carlisle.  In response, the MPSC is developing a revised schedule and scope of work, taking into consideration unknowns regarding the Pandemic and how it is affecting our families and our community.  The MPSC anticipates developing a plan for next steps of the Carlisle Forward Master Plan by early September."
      );
    }
    return ups;
  }
}
</script>
