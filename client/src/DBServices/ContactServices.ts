import axios from "axios";

const url = "http://localhost:5000/api/contact_us/";

type ContactUs = {
  firstName: string;
  lastName: string;
  email: string;
  comment: string;
  createdAt: Date;
  _id: string;
};

class ContactServices {
  //get comments
  static getComments() {
    console.log("hwlllo");
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then(res => {
          const data = res.data;
          resolve(
            data.map((comment: ContactUs) => ({
              ...comment,
              createdAt: new Date(comment.createdAt)
            }))
          );
        })
        .catch(err => {
          reject(err);
        });
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

  //delete comments
  static deleteComment(id: string) {
    return axios.delete(`${url}${id}`);
  }
}

export default ContactServices;
