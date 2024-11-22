import axios from "axios";
import { IngredientInfo, CockTailInfo } from "../model/models";
import { BASE_URL } from "../environment/environment";

export const get_by_ingredient_name = async (name: string) => {
  return (await axios.get(`${BASE_URL}/filter.php?i=${name}`)).data.drinks as CockTailInfo[];
};

export const get_ingredients_list = async () => {
    return (await axios.get(`${BASE_URL}/list.php?i=list`)).data.drinks as IngredientInfo[];
  };