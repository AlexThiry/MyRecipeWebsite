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
  Image: string;
}

const RecipeIcon: React.FC<{ recipeSent: RecipeData}> = ({ recipeSent } ) => {
  const { Author, RecipeName, PrepTime, CookTime, TotalTime, Instructions, Tags, Image} = recipeSent;

  return (
    <div className="iconContainer" >
      <a href={`http://localhost:4000/api/recipes/${RecipeName}`} target="_blank" key={RecipeName}>
        <img className="image" src={`data:image/png;base64,${Image}`} alt={RecipeName} />
        <div className="overlay">
          <div className="text">{`${RecipeName} - ${TotalTime}`}</div>
        </div>
      </a>
    </div>
  );
};

export default RecipeIcon;