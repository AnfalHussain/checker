import axios from "axios";

const instance = axios.create({
  baseURL: "http://68b38a78.ngrok.io/api/"
});

export default instance;
