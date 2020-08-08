<template>
  <div>
    <click-to-edit />
    <input
      type="text"
      @click="clickText()"
      v-model="message"
      placeholder="edit me"
    />
    <p>Message is : {{ message }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import ClickToEdit from "../components/ClickToEdit.vue";
export default Vue.extend({
  components: {
    ClickToEdit
  },

  data: function() {
    return {
      message: ""
    };
  },

  methods: {}
});
</script>
