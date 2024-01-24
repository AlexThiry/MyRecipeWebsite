import {useState, useEffect} from "react";
import "./Recommended.css"
import RecipeIcon from "./RecipeIcon"

interface Recipe {
    ingredients: string[];
    prepTime: string;
}

interface RecommendedData {
    [recipeName: string]: Recipe;
  }

const Recommended = () => {
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
                    <RecipeIcon key={recipeName} recipeSent={{ recipeName, ...recipe }} />
                  ))
            )}
        </div>
    );
}

export default Recommended;