import {useState, useEffect} from "react";
import "./Recommended.css"
import RecipeIcon from "./RecipeIcon"

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

interface CurrentFilter {
    filter: string;
}

const Recommended = ({filter}: CurrentFilter) => {
    console.log("Filter value:", filter);
    const [backendData, setBackendData] = useState<Recipe[]>([]);
    useEffect(() => {
        fetch('/api/recipes').then(
            (response) => {return response.json();}
        ).then(
            (data) => {
                console.log(data);
                setBackendData(data.recipes);
            }
        ).catch((error) => {
            console.error('Error fetching recipes:', error);
        });
    }, []);
    
    return (
        <div className="recommendedContainer">
            {backendData.length === 0 ? (
                <p>Fetching data from server...</p>
            ) : (
                backendData.filter((recipe) => recipe.Tags.includes(filter))
          .map((recipe) => (
            <RecipeIcon key={recipe.RecipeName} recipeSent={recipe} />
                ))
            )}
        </div>
    );
}

export default Recommended;