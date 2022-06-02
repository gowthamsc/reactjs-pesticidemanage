import axios from "axios";

export default axios.create({
  baseURL: "https://pest-manage-banckend.herokuapp.com",
  headers: {
    "Content-type": "application/json"
  }
});