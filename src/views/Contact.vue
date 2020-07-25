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

    <v-row>
      <div>
        <h1 style="font-size:15pt; text-align:left; color:grey">First Name</h1>
      </div>
    </v-row>
    <v-row>
      <v-text-field outlined="true"></v-text-field>
    </v-row>

    <v-row>
      <div>
        <h1 style="font-size:15pt; text-align:left; color:grey">Last Name</h1>
      </div>
    </v-row>
    <v-row>
      <v-text-field outlined="true"></v-text-field>
    </v-row>

    <v-row>
      <div>
        <h1 style="font-size:15pt; text-align:left; color:grey">Email</h1>
      </div>
    </v-row>
    <v-row>
      <v-text-field outlined="true"></v-text-field>
    </v-row>

    <v-row>
      <div>
        <h1 style="font-size:15pt; text-align:left; color:grey">Comment</h1>
      </div>
    </v-row>
    <v-row>
      <v-text-field outlined="true" height="350"></v-text-field>
    </v-row>
    <v-card-actions class="justify-center">
      <v-btn>
        Submit
      </v-btn>
    </v-card-actions>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class Contact extends Vue {}
</script>
