import {useState, useEffect} from "react";
import "./Recommended.css"
import RecipeIcon from "./RecipeIcon"

interface Recipe {
    recipeName: string;
    ingredients: string[];
    prepTime: string;
    cookTime: string;
    totalTime: string;
    instructions: string;
    tags: string[];
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
        );
    }, []);
    
    return (
        <div className="recommendedContainer">
            {backendData.length === 0 ? (
                <p>Fetching data from server...</p>
            ) : (
                backendData.filter((recipe) => recipe.tags.includes(filter))
          .map((recipe) => (
            <RecipeIcon key={recipe.recipeName} recipeSent={recipe} />
                ))
            )}
        </div>
    );
}

export default Recommended;