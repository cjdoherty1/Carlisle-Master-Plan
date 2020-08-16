import axios from "axios";

const url = "/api/housing_comments/";

type HComment = {
  text: string;
  promt: string;
  author: string;
  createdAt: Date;
  _id: string;
};

class HCommentsService {
  //get updates
  static getUpdates() {
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then(res => {
          const data = res.data;
          resolve(
            data.map((update: HComment) => ({
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
  static insertPost(author: string, promt: string, text: string) {
    console.log(author + promt + text);
    return axios.post(url, {
      author: author,
      title: promt,
      text: text
    });
  }

  //create commnet for Contact
  static sendComment(
    firstName: string,
    lastName: string,
    email: string,
    comment: string
  ) {
    console.log(firstName + lastName + email + comment);
    return axios.post(url, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      comment: comment
    });
  }

  //delete updates
  static deletePost(id: string) {
    return axios.delete(`${url}${id}`);
  }
}

export default HCommentsService;
