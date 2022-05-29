import shoesApi from "../shoesApi";

export default deleteShoes = async (id) => {
  try {
    const response = await shoesApi.delete(id);
    return response;
  } catch (error) {
    console.log(error);
  }
};
