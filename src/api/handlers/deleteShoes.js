import shoesApi from "../shoesApi";

const deleteShoes = async (id) => {
  try {
    const response = await shoesApi.delete(id);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export default deleteShoes;
