<template>
  <GmapMap
    :center="{lat:42.5293, lng:-71.3495}"
    :zoom="15"
    map-type-id="terrain"
    style="width: 1000px; height: 800px; top: 20%; left:20%"
  >
    <GmapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"
    />
  </GmapMap>
</template>

<script>
import Vue from "vue";

export default {
  data: function() {
    return {
      markers: [
        {
          position: {
            lat: 10.0,
            lng: 10.0
          }
        },
        {
          position: {
            lat: 11.0,
            lng: 11.0
          }
        }
      ]
    };
  },

  created() {
    console.log(this.markers[1].position.lat);
  }
};

import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCU_4aUkKqfUUucQryzroZWXhqOrfK--XQ",
    libraries: "places" // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  },

  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,

  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then set installComponents to 'false'.
  //// If you want to automatically install all the components this property must be set to 'true':
  installComponents: true
});

document.addEventListener("DOMContentLoaded", function() {
  Vue.component("google-map", VueGoogleMaps.Map);
  Vue.component("google-marker", VueGoogleMaps.Marker);

  new Vue({
    el: "#root",
    data: {
      center: {
        lat: 10.0,
        lng: 10.0
      },
      markers: [
        {
          position: {
            lat: 10.0,
            lng: 10.0
          }
        },
        {
          position: {
            lat: 11.0,
            lng: 11.0
          }
        }
      ]
    }
  });
});
</script>
