<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <v-card>
          <v-card-title>Add New Update</v-card-title>
          <v-container>
            <form>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  v-model="title"
                  placeholder="Update Title"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control form-control-lg"
                  rows="8"
                  v-model="text"
                  placeholder="Update Description"
                />
              </fieldset>
              <v-btn style="width:100%;" @click="createUpdate"> Submit </v-btn>
            </form>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card>
          <v-card-title>Add New Update</v-card-title>
          <v-container>
            <form>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  v-model="title"
                  placeholder="Update Title"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control form-control-lg"
                  rows="8"
                  v-model="text"
                  placeholder="Update Description"
                />
              </fieldset>
              <v-btn style="width:100%;" @click="createUpdate"> Submit </v-btn>
            </form>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card>
          <v-card-title>Add New Update</v-card-title>
          <v-container>
            <form>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  v-model="title"
                  placeholder="Update Title"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control form-control-lg"
                  rows="8"
                  v-model="text"
                  placeholder="Update Description"
                />
              </fieldset>
              <v-btn style="width:100%;" @click="createUpdate"> Submit </v-btn>
            </form>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import UpdateService from "../DBServices/UpdateService";

type Update = {
  text: string;
  title: string;
  author: string;
  createdAt: Date;
  _id: string;
};

@Component({
  components: {}
})
export default class Updates extends Vue {
  updates: Update[] = [];
  error = "";
  text = "";
  title = "";
  author = "Colin Doherty";

  async created() {
    try {
      this.updates = (await UpdateService.getUpdates()) as Update[];
    } catch (err) {
      this.error = err.message;
    }
  }
  async createUpdate() {
    await UpdateService.insertPost(this.author, this.title, this.text);
    this.updates = (await UpdateService.getUpdates()) as Update[];
    console.log(this.author + this.title + this.text);
  }
  async deletePost(id: string) {
    await UpdateService.deletePost(id);
    this.updates = (await UpdateService.getUpdates()) as Update[];
  }
}
</script>
