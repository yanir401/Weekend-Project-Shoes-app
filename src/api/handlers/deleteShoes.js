import shoesApi from "../shoesApi";

export default async (id) => {
  try {
    const response = await shoesApi.delete(id);
    return response;
  } catch (error) {
    console.log(error);
  }
};
