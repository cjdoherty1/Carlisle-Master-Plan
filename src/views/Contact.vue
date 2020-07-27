<template>
  <v-container>
    <v-row>
      <v-col cols="4" />
      <v-col cols="4">
        <v-card>
          <h1 style="font-size:30pt; text-align:center;" class="py-2">
            Contact Us
          </h1>
        </v-card>
      </v-col>
    </v-row>
    <div>
      <h1 style="font-size:15pt; text-align:center; color:grey">
        Question? Comment? Brilliant idea? Use this form to send us a message.
      </h1>
    </div>

    <form class="py-2">
      <fieldset class="form-group">
        <input
          class="form-control form-control-lg"
          type="text"
          v-model="title"
          placeholder="First Name"
        />
      </fieldset>
      <fieldset class="form-group">
        <input
          class="form-control form-control-lg"
          type="text"
          v-model="title"
          placeholder="Last Name"
        />
      </fieldset>
      <fieldset class="form-group">
        <input
          class="form-control form-control-lg"
          type="text"
          v-model="title"
          placeholder="Email"
        />
      </fieldset>
      <fieldset class="form-group">
        <textarea
          class="form-control form-control-lg"
          rows="8"
          v-model="details"
          placeholder="Comment"
        />
      </fieldset>
      <v-btn
        elevation="24"
        height="40px"
        color="#3949AB"
        dark
        style="width:100%; "
        >Submit</v-btn
      >
    </form>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class Contact extends Vue {}
</script>
