import shoesApi from "../shoesApi";

export default getShoes = async () => {
  try {
    const response = await shoesApi.get();
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
