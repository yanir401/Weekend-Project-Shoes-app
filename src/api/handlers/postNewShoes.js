import shoesApi from "../shoesApi";

export default postNewShoes = async (data) => {
  try {
    const response = await shoesApi.post("", data);
    return response;
  } catch (error) {
    console.log(error);
  }
};
