<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <v-card>
          <v-card-title> Project Updates</v-card-title>
        </v-card>
      </v-col>
      <v-col>
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
                  v-model="details"
                  placeholder="Update Description"
                />
              </fieldset>
              <v-btn style="width:100%;"> Submit </v-btn>
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

@Component({
  components: {}
})
export default class Updates extends Vue {
  details = "";
  title = "";
}
</script>
