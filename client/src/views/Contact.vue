<template>
  <div style="padding-top: 100px">
    <v-container>
      <div class="py-1">
        <h1
          style="color: white; font-size: 70px; text-align: center; font-weight:bold"
        >
          CONTACT US!
        </h1>
      </div>
      <div style="padding-top: 35px">
        <div>
          <h1 style="font-size:15pt; text-align:center; color:grey">
            Question? Comment? Brilliant idea? Use this form to send us a
            message.
          </h1>
        </div>

        <form class="py-2">
          <fieldset class="form-group">
            <input
              class="form-control form-control-lg"
              type="text"
              v-model="firstName"
              placeholder="First Name"
            />
          </fieldset>
          <fieldset class="form-group">
            <input
              class="form-control form-control-lg"
              type="text"
              v-model="lastName"
              placeholder="Last Name"
            />
          </fieldset>
          <fieldset class="form-group">
            <input
              class="form-control form-control-lg"
              type="text"
              v-model="email"
              placeholder="Email"
            />
          </fieldset>
          <fieldset class="form-group">
            <textarea
              class="form-control form-control-lg"
              rows="8"
              v-model="comment"
              placeholder="Comment"
            />
          </fieldset>
          <v-btn
            elevation="16"
            height="40px"
            color="#3949AB"
            dark
            style="width:100%"
            @click="sendComment"
            >Submit</v-btn
          >
        </form>
      </div>
      <div>
        <h1
          style="font-size:15pt; text-align:center; color:grey; padding: 20px"
        >
          Your message will be sent directly to the MPSC. If you wish to post a
          public comment,
        </h1>
      </div>
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
export default class Contact extends Vue {
  firstName = "";
  lastName = "";
  email = "";
  comment = "";

  async sendComment() {
    console.log(this.firstName + this.lastName + this.email + this.comment);
    await ContactServices.sendComment(
      this.firstName,
      this.lastName,
      this.email,
      this.comment
    );
  }
}
</script>
