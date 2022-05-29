import shoesApi from "../shoesApi";

export default setShoes = async (data) => {
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
