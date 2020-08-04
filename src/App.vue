<template>
  <v-app>
    <v-img
      v-if="this.$router.currentRoute.name != 'Home'"
      :src="require('@/assets/Background 2 (1).jpg')"
      alt="Participate Background"
      eager
      lazy-src
      contain
    />
    <v-app-bar :color="col" dark height="90" elevation="0" fixed top>
      <div style="padding-bottom: 10px; padding-top: 10px">
        <v-img
          class="py-2"
          :src="require('@/assets/Dark Blue_SustainablePath.png')"
          alt="Carlise Master Plan"
          contain
          height="500"
          width="150"
        />
      </div>
      <v-spacer></v-spacer>
      <v-btn tile text width="15%" height="90px" to="/">
        <v-icon x-large color="#81C784">mdi-home</v-icon>Home
      </v-btn>
      <v-btn tile text width="15%" height="90px" to="/participate">
        <v-icon x-large color="#81C784">mdi-message-text</v-icon>participate
      </v-btn>
      <v-btn tile text width="15%" height="90px" to="/snapshots">
        <v-icon x-large color="#81C784">mdi-camera</v-icon>Snapshots
      </v-btn>
      <v-btn tile text width="15%" height="90px" to="/project_info">
        <v-icon x-large color="#81C784">mdi-information-outline</v-icon>Project
        Info
      </v-btn>
      <v-btn tile text width="15%" height="90px" to="/contact">
        <v-icon x-large color="#81C784">mdi-email</v-icon>Contact
      </v-btn>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap");

html,
body {
  font-family: "Noto Sans", sans-serif;
}

/* width */
::-webkit-scrollbar {
  width: 13px;
  outline-color: #3949ab;
}

/* Track */
::-webkit-scrollbar-track {
  background: #6e6e70;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #3949ab;
}

/*
useless, just here for template for css classes
*/
.change_opacity {
  background: rgba(75, 77, 75, 0.3);
}

#app {
  font-family: "Noto Sans", sans-serif;
}
</style>

<script>
export default {
  name: "Header",
  data: function() {
    return {
      scrollPosition: 0,
      col: "transparent"
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
      this.col =
        this.scrollPosition > 50 ? "rgba(40, 40, 40, 0.85)" : "transparent";
    }
  },

  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  }
};
</script>
