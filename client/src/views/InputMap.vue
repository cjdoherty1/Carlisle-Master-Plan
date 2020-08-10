<template>
  <div>
    <h1>This is the Idea Wall page</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  components: {}
})
export default class InputMapPage extends Vue {
  details = "";
  title = "";
}
</script>
