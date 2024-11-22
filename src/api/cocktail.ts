import axios from "axios";
import { CockTailInfo } from "../model/models";
import { BASE_URL } from "../environment/environment";

export const get_by_cocktail_id = async (cocktailId: number) => {
  return (await axios.get(`${BASE_URL}/lookup.php?i=${cocktailId}`)).data.drinks as CockTailInfo[];
};

export const get_all_by_letter = async (letter: string) => {
    return (await axios.get(`${BASE_URL}/search.php?f=${letter}`)).data.drinks as CockTailInfo[];
  };

  export const get_by_name = async (name: string) => {
    return (await axios.get(`${BASE_URL}/lookup.php?i=${name}`)).data.drinks as CockTailInfo[];
  };