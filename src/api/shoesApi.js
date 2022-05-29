import axios from "axios";

const URL = "https://628e836ba339dfef87af46e3.mockapi.io/shoes";

export default axios.create({
  baseURL: URL,
});
