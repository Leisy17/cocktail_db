import { useEffect, useState } from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { CockTailInfo } from "../model/models";
import { get_all_by_letter } from "../api/cocktail";
import "../App.css";


const CocktailList = () => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const [cocktails, setCocktails] = useState<CockTailInfo[]>([]);

  const getCocktails = async () => {
    const allCocktails: CockTailInfo[] = [];
    for (let letter of alphabet) {
      try {
        const result = await get_all_by_letter(letter);
        allCocktails.push(
          ...result.map(
            (ae: any) =>
              ({
                idDrink: ae.idDrink,
                strDrink: ae.strDrink,
                strDrinkThumb: ae.strDrinkThumb,
              } as CockTailInfo)
          )
        );
      } catch (error) {
        console.error(`Error fetching cocktails for letter ${letter}:`, error);
      }
    }
    allCocktails.sort((a, b) => a.strDrink.localeCompare(b.strDrink));
    setCocktails(allCocktails);
  };


  useEffect(() => {
    getCocktails();
  }, []);

  return (
    <div>
      <h1>Cocktails</h1>
      <ImageList cols={4} gap={8} style={{ margin: 20 }} rowHeight={500}>
      {cocktails.map((cocktail) => (
        <ImageListItem key={cocktail.idDrink}>
          <img
            srcSet={`${cocktail.strDrinkThumb}`}
            src={`${cocktail.strDrinkThumb}`}
            alt={cocktail.strDrink}
            loading="lazy"
          />
          <ImageListItemBar
            title={cocktail.strDrink}
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
  );
};
export default CocktailList;