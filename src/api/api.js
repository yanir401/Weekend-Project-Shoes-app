import axios from "axios";
export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID gzC_VLPLcJNg3Jy6QT8k1-stXmEZAIGOB6JGJlg4rsQ",
  },
});
