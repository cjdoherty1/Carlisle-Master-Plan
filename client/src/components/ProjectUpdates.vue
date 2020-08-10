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
        <div v-for="(update, i) in updates.slice(0, 3)" :key="i">
          <v-divider />
          <v-card flat class="my-2">
            <v-card-title style="color: #3949AB">{{
              update.title
            }}</v-card-title>
            <v-card-subtitle style="color: #3949AB"
              >{{
                `${update.createdAt.getDate()}/${update.createdAt.getMonth()}/${update.createdAt.getFullYear()}`
              }}
              by {{ update.author }}</v-card-subtitle
            >
            <v-card-text style="color: #1B5E20">
              <VClamp :expanded.sync="expanded" :max-lines="1000">
                {{ update.text }}
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

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import "vue-property-decorator";
import VClamp from "vue-clamp";
import UpdateService from "../DBServices/UpdateService";

type Update = {
  text: string;
  title: string;
  author: string;
  createdAt: Date;
  _id: string;
};

@Component({
  components: {
    VClamp
  }
})
export default class ProjectUpdates extends Vue {
  expanded = false;
  error = "";
  updates: Update[] = [];
  async created() {
    try {
      this.updates = (await UpdateService.getUpdates()) as Update[];
    } catch (err) {
      this.error = err.message;
    }
  }
}
</script>

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
