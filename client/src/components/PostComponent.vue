<template>
  <div class="container">
    <h1>Latests Upadtes</h1>
    <div class="create-post">
      <label for="create-post">Author</label>
      <input
        type="text"
        id="create-post"
        v-model="author"
        placeholder="Create a post"
      />
    </div>
    <div class="create-post">
      <label for="create-post">Title</label>
      <input
        type="text"
        id="create-post"
        v-model="title"
        placeholder="Create a post"
      />
    </div>
    <div class="create-post">
      <label for="create-post">Text</label>
      <input
        type="text"
        id="create-post"
        v-model="text"
        placeholder="Create a post"
      />
      <button @click="createUpdate">Post!</button>
    </div>
    <hr />
    <p class="error" v-if="error">{{ error }}</p>
    <div
      class="post"
      v-for="(update, i) in updates"
      :item="update"
      :key="update._id"
      :index="i"
      @dblclick="deletePost(update._id)"
    >
      {{
        `${update.createdAt.getDate()}/${update.createdAt.getMonth()}/${update.createdAt.getFullYear()}`
      }}
      <p class="text">{{ update.author }}</p>
      <p class="text">{{ update.title }}</p>
      <p class="text">{{ update.text }}</p>
    </div>
  </div>
</template>

<script>
import UpdateService from "../UpdateService";
export default {
  name: "UpdateComponent",
  data() {
    return {
      updates: [],
      error: "",
      text: "",
      author: "",
      title: ""
    };
  },
  async created() {
    try {
      this.updates = await UpdateService.getUpdates();
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    async createUpdate() {
      await UpdateService.insertPost(this.author, this.title, this.text);
      this.updates = await UpdateService.getUpdates();
      console.log(this.author + this.title + this.text);
    },
    async deletePost(id) {
      await UpdateService.deletePost(id);
      this.updates = await UpdateService.getUpdates();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container {
  max-width: 800px;
  margin: 0 auto;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}

div.post {
  position: relative;
  border: 1px solid #5bd658;
  background-color: #bcffb8;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}

div.created-at {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  background-color: darkgreen;
  color: white;
  font-size: 13px;
}

p.text {
  font-size: 22px;
  font-weight: 700;
  margin: 0;
}
</style>
