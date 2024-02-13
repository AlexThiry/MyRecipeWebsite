import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();
    const url = window.location.href;
    const recipeId = url.slice(30); //To get recipe name by ignoring the first url characters
    console.log(recipeId);

    const [currentRecipe, setCurrentRecipe] = useState<Recipe | null>(null);
    
    useEffect(() => {
        fetch(`/api/recipes/${recipeId}`).then(
            (response) => {return response.json();}
        ).then(
            (data) => {
                console.log("DATA", data);
                data.error ? navigate('/page-not-found') : setCurrentRecipe(data); //If recipe is nonexistent
            }
        ).catch((error) => {
            console.error('Error fetching recipes:', error);
    });
    }, []);
    
    return (
        <div>
        {(currentRecipe && currentRecipe.Author)? (
            <div>
            <h1>{currentRecipe.RecipeName}</h1>
            <p>Author: {currentRecipe.Author}</p>
            <p>Prep Time: {currentRecipe.PrepTime}</p>
            <p>Cook Time: {currentRecipe.CookTime}</p>
            <p>Total Time: {currentRecipe.TotalTime}</p>
            <p>Instructions: {currentRecipe.Instructions}</p>
            </div>
        ) : (
            <p>Fetching data from server...</p>
        )}
        </div>
    );
};

export default Template;