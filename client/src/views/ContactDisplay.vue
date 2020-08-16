<template>
  <div style="padding-top: 215px">
    <v-container>
      <v-card v-for="(contact, i) in contacts" :key="i">
        <v-card-text>
          {{ contact.comment }}
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import ContactServices from "../DBServices/ContactServices";

type ContactUs = {
  firstName: string;
  lastName: string;
  email: string;
  comment: string;
  createdAt: Date;
  _id: string;
};

@Component({
  components: {}
})

export default class ContactDisplay extends Vue {
  contacts: ContactUs[] = [];
  error: "";

  async created() {
    try {
      this.contacts = (await ContactServices.getComments()) as ContactUs[];
    } catch (err) {
      this.error = err.message;
    }
  }
}
</script>
