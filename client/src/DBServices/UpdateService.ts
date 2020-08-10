import axios from "axios";

const url = "http://localhost:5000/api/updates/";

type Update = {
  text: string;
  title: string;
  author: string;
  createdAt: Date;
  _id: string;
};

class UpdateService {
  //get updates
  static getUpdates() {
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then(res => {
          const data = res.data;
          resolve(
            data.map((update: Update) => ({
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
  static insertPost(author: string, title: string, text: string) {
    console.log(author + title + text);
    return axios.post(url, {
      author: author,
      title: title,
      text: text
    });
  }

  //delete updates
  static deletePost(id: string) {
    return axios.delete(`${url}${id}`);
  }
}

export default UpdateService;
