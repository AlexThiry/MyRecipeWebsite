import {useState, useEffect} from "react";
import "./Recommended.css"
import RecipeIcon from "./RecipeIcon"

interface Recipe {
    ingredients: string[];
    prepTime: string;
    tags: string[];
}

interface RecommendedData {
    [recipeName: string]: Recipe;
}

interface CurrentFilter {
    filter: string;
}

const Recommended = ({filter}: CurrentFilter) => {
    const  [backendData, setBackendData] = useState<RecommendedData>({});
    
    useEffect(() => {
        fetch('/api/recipes').then(
            (response) => {return response.json();}
        ).then(
            (data) => {
                console.log(data);
                setBackendData(data);
            }
        );
    }, []);
    
    return (
        <div className="recommendedContainer">
            {Object.keys(backendData).length === 0 ? (
                <p>Loading...</p>
            ) : (
                Object.entries(backendData).map(([recipeName, recipe]) => (
                    recipe.tags.includes(filter) && <RecipeIcon key={recipeName} recipeSent={{ recipeName, ...recipe}}/>
                ))
            )}
        </div>
    );
}

export default Recommended;