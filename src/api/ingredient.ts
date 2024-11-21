import axios from "axios";
import { BASE_URL } from "../environment/environment";
const url = `${BASE_URL}/lookup.php`;

export const get_by_cocktail_id = async (cocktailId: number) => {
  return (await axios.get(`${url}?i=${cocktailId}`)).data;
};