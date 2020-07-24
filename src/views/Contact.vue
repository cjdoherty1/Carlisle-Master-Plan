<template>
  <v-container>
    <v-row>
      <v-col cols="4" />
      <v-col cols="4">
        <v-card>
          <h1 style="font-size:30pt; text-align:center;" class="py-2">
            Contact Us!
          </h1>
        </v-card>
      </v-col>
    </v-row>
    <div>
      <h1 style="font-size:15pt; text-align:center;" class="greytextclass">
        Question? Comment? Brilliant idea? Use this form to send us a message.
      </h1>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class Contact extends Vue {}
</script>
