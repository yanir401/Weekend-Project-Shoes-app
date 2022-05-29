import shoesApi from "../shoesApi";

const getShoes = async () => {
  try {
    const response = await shoesApi.get();
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export default getShoes;
