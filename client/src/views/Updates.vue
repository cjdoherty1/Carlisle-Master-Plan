<template>
  <div style="padding-top: 240px">
    <v-container>
      <v-row>
        <v-col cols="8">
          <v-card tile outlined
            ><v-card-title> Project Updates </v-card-title>
          </v-card>
          <v-card tile outlined>
            <v-card v-for="(update, i) in updates" :key="i" tile outlined>
              <v-card-title>{{ update.title }}</v-card-title>
              <v-card-subtitle>
                {{
                  `${update.createdAt.getDate()}/${update.createdAt.getMonth()}/${update.createdAt.getFullYear()}`
                }}
                by {{ update.author }}
              </v-card-subtitle>
              <v-card-text>{{ update.text }}</v-card-text>
            </v-card>
          </v-card>
        </v-col>
        <v-col>
          <v-card tile outlined>
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
                  <input
                    class="form-control form-control-lg"
                    type="text"
                    v-model="author"
                    placeholder="Update Author"
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
                <v-btn style="width:100%;" @click="createUpdate">Submit</v-btn>
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
  author = "";

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
  }
  async deletePost(id: string) {
    await UpdateService.deletePost(id);
    this.updates = (await UpdateService.getUpdates()) as Update[];
  }
}
</script>
