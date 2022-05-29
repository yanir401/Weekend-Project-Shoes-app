import shoesApi from "../shoesApi";

const postNewShoes = async (data) => {
  try {
    const response = await shoesApi.post("", data);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export default postNewShoes;
