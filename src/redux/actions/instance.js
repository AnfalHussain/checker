import axios from "axios";

const instance = axios.create({
  // baseURL: "http://68b38a78.ngrok.io/api/"
  baseURL: "http://127.0.0.1:8000/api/"
});

export default instance;
