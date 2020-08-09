<template>
  <v-app>
    <div>
      <v-img
        v-if="this.$router.currentRoute.name != 'Home'"
        :src="require('@/assets/Background 2 (1).jpg')"
        alt="Participate Background"
        eager
        lazy-src
        contain
        style="position:absolute; top: 0px"
      />
    </div>
    <v-app-bar :color="col" dark height="90" elevation="0" fixed top>
      <div style="padding-bottom: 10px; padding-top: 10px">
        <v-img
          class="py-2"
          :src="require('@/assets/Logo_Light.png')"
          alt="Carlise Master Plan"
          contain
          height="500"
          width="150"
        />
      </div>
      <v-spacer></v-spacer>
      <v-btn tile text width="15%" height="90px" to="/">
        <v-icon x-large color="#81C784">mdi-home</v-icon>
        <p style="font-size: 15pt; padding-top: 20px">
          <strong>Home</strong>
        </p>
      </v-btn>
      <v-btn tile text width="15%" height="90px" to="/participate">
        <v-icon x-large color="#81C784">mdi-message-text</v-icon>
        <p style="font-size: 15pt; padding-top: 20px">
          <strong>participate</strong>
        </p>
      </v-btn>
      <v-btn tile text width="15%" height="90px" to="/snapshots">
        <v-icon x-large color="#81C784">mdi-camera</v-icon>
        <p style="font-size: 15pt; padding-top: 20px">
          <strong>snapshots</strong>
        </p>
      </v-btn>
      <v-btn tile text width="15%" height="90px" to="/project_info">
        <v-icon x-large color="#81C784">mdi-information-outline</v-icon>
        <p style="font-size: 15pt; padding-top: 20px">
          <strong>project info</strong>
        </p>
      </v-btn>
      <v-btn tile text width="15%" height="90px" to="/contact">
        <v-icon x-large color="#81C784">mdi-email</v-icon>
        <p style="font-size: 15pt; padding-top: 20px">
          <strong>Contact</strong>
        </p>
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
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
