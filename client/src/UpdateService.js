import axios from "axios";

const url = "api/updates/";

class UpdateService {
  //get updates
  static getUpdates() {
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then(res => {
          const data = res.data;
          resolve(
            data.map(update => ({
              ...update,
              createdAt: new Date(update.createdAt)
            }))
          );
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  //create post
  static insertPost(author, title, text) {
    console.log(author + title + text);
    return axios.post(url, {
      author: author,
      title: title,
      text: text
    });
  }

  //delete updates
  static deletePost(id) {
    return axios.delete(`${url}${id}`);
  }
}

export default UpdateService;
