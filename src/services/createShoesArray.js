import get from "../api/handlers/get";
import setShoes from "../api/handlers/setShoes";
import { faker } from "@faker-js/faker";

export const createShoesArray = async () => {
  try {
    const shoes = await get("shoes");
    const newShoesArray = shoes.map((shoe) => {
      return {
        title: shoe.alt_description,
        price: faker.commerce.price(),
        image: shoe.urls.small,
      };
    });
    const res = await setShoes(newShoesArray);
    return res;
  } catch (error) {
    console.log(error);
  }
};
