import api from "../api";

const get = async (query) => {
  try {
    const response = await api.get("https://api.unsplash.com/search/photos", {
      params: { query },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
export default get;
