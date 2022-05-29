import shoesApi from "../shoesApi";
const putShoes = async (id, shoes) => {
  try {
    const response = await shoesApi.put(id, shoes);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export default putShoes;
