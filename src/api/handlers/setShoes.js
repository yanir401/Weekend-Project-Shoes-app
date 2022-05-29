import shoesApi from "../shoesApi";

const setShoes = async (data) => {
  try {
    const promiseArray = [];
    for (const shoes of data) {
      const response = await shoesApi.post("", shoes);
      promiseArray.push(response);
    }
    const response = await Promise.allSettled(promiseArray);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export default setShoes;
