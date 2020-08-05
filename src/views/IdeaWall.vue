<template>
  <div>
    <h1>COLIN</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  components: {}
})
export default class IdeaWall extends Vue {
  details = "";
  title = "";
}
</script>
