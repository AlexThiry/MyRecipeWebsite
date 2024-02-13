import { useState, useEffect} from 'react';

interface Recipe {
    Author: string;
    RecipeName: string;
    Ingredients: string[];
    PrepTime: string;
    CookTime: string;
    TotalTime: string;
    Instructions: string;
    Tags: string[];
}

const Template = () => {
  const url = window.location.href;
  const recipeId = url.slice(30).replace('%20',' ')
  console.log(recipeId)

  const [allRecipes, setRecipe] = useState<Recipe[]>([]);
    useEffect(() => {
        fetch(`/api/recipes/`).then(
            (response) => {return response.json();}
        ).then(
            (data) => {
                console.log(data);
                setRecipe(data.recipes);
            }
        );
    }, []);

  return (
    <div>
      {allRecipes ? (allRecipes.map((current) => (
        current.RecipeName === recipeId && <div>
        <h1>{current.RecipeName}</h1>
        <p>Author: {current.Author}</p>
        <p>Prep Time: {current.PrepTime}</p>
        <p>Cook Time: {current.CookTime}</p>
        <p>Total Time: {current.TotalTime}</p>
        <p>Instructions: {current.Instructions}</p>
      </div>
      ))) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Template;