import shoesApi from "../shoesApi";

export default async (id, shoes) => {
  try {
    const response = await shoesApi.put(id, shoes);
    return response;
  } catch (error) {
    console.log(error);
  }
};
