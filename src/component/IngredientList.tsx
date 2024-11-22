import { useEffect, useState } from "react";
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import { IngredientInfo } from "../model/models";
import { get_ingredients_list } from "../api/ingredient";
import "../App.css";


const IngredientList = () => {
  const [ingredients, setIngredients] = useState<IngredientInfo[]>([]);

  const getIngredients = async () => {
    setIngredients(
      (await get_ingredients_list()).map(
        ae =>
          ({
            strIngredient1: ae.strIngredient1
          } as IngredientInfo)
      )
    );
  }

  useEffect(() => {
    getIngredients();
  }, []);

  const handleClick = () => {
    console.log("Persocole");
  };

  return (
    <div>
      <h1>Ingredients</h1>
      <List
       className='ingredients-list'
      >
      {ingredients.map((ingredient) => (
        <ListItemButton 
        onClick={handleClick}
        className='list-item-button'
        >
        <ListItemText primary={ingredient.strIngredient1} />
      </ListItemButton>
      ))}
    </List>
    </div>
  );
};

export default IngredientList;
