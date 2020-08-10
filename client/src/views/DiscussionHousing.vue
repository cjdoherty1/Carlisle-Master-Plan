<template>
  <div style="padding-top: 100px">
    <v-container>
      <v-row>
        <v-col cols="8">
          <v-tabs 
            vertical 
            :value="activeTab" 
            active
            @click="console.log('activeTab')"
          >
            <v-tabs-slider></v-tabs-slider>
            <v-tab>Property Values</v-tab>
            <v-tab><div style="text-align:left;">House Size</div></v-tab>
            <v-tab>Affordable Housing</v-tab>
            <v-tab-item>
              <h1>Property Values</h1>
              <v-card v-for="(update, i) in updates" :key="i">
                <v-card-text><div style="color: #3949AB;">{{ update.author }}:</div> {{ update.text }}</v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <h1>House Size</h1>
            </v-tab-item>
            <v-tab-item>
              <h1>Affordable Housing</h1>
            </v-tab-item>
          </v-tabs>
        </v-col>
        <v-col>
          <v-card>
            <v-card-title>Add Comment</v-card-title>
            <v-container>
              <form>
                <fieldset class="form-group">
                  <input
                    class="form-control form-control-lg"
                    type="text"
                    v-model="author"
                    placeholder="Comment Author"
                  />
                </fieldset>
                <fieldset class="form-group">
                  <textarea
                    class="form-control form-control-lg"
                    rows="8"
                    v-model="text"
                    placeholder="Comment"
                  />
                </fieldset>
                <v-btn style="width:100%;" @click="createUpdate">
                  Submit
                </v-btn>
              </form>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import HCommentsService from "../DBServices/HCommentsService";

type HComment = {
  text: string;
  promt: string;
  author: string;
  createdAt: Date;
  _id: string;
};

@Component({
  components: {}
})
export default class DiscussionHousing extends Vue {
  updates: HComment[] = [];
  error = "";
  text = "";
  promt = "lol";
  author = "";
  activeTab = "";

  selectedTab(newTab: string) {
    this.activeTab = newTab;
  }

  async created() {
    try {
      this.updates = (await HCommentsService.getUpdates()) as HComment[];
    } catch (err) {
      this.error = err.message;
    }
  }
  async createUpdate() {
    await HCommentsService.insertPost(this.author, this.promt, this.text);
    this.updates = (await HCommentsService.getUpdates()) as HComment[];
  }
  async deletePost(id: string) {
    await HCommentsService.deletePost(id);
    this.updates = (await HCommentsService.getUpdates()) as HComment[];
  }
}
</script>
