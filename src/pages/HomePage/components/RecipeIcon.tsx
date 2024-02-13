import React from "react";
import "./RecipeIcon.css";

interface RecipeData {
  Author: string;
  RecipeName: string;
  Ingredients: string[];
  PrepTime: string;
  CookTime: string;
  TotalTime: string;
  Instructions: string;
  Tags: string[];
}

const RecipeIcon: React.FC<{ recipeSent: RecipeData}> = ({ recipeSent } ) => {
  const { Author, RecipeName, PrepTime, CookTime, TotalTime, Instructions, Tags } = recipeSent;

  return (
    <div className="iconContainer" >
      <a href={`http://localhost:5173/recipes/${RecipeName}`} target="_blank" key={RecipeName}>
        <img className="image" src="src/images/placeholder.png" alt={RecipeName} />
        <div className="overlay">
          <div className="text">{`${RecipeName} - ${TotalTime}`}</div>
        </div>
      </a>
    </div>
  );
};

export default RecipeIcon;