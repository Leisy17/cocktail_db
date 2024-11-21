import axios from "axios";
import { BASE_URL } from "../environment/environment";

export const get_by_ingredient_id = async (ingredientId: number) => {
  return (await axios.get(`${BASE_URL}/lookup.php?ii=${ingredientId}`)).data;
};

export const get_ingredients_list = async () => {
    return (await axios.get(`${BASE_URL}/list.php?i=list`)).data;
  };