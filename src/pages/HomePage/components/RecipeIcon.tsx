import React from "react";
import "./RecipeIcon.css";

interface RecipeData {
  recipeName: string;
  ingredients: string[];
  prepTime: string;
  cookTime: string;
  totalTime: string;
  instructions: string;
  tags: string[];
}

const RecipeIcon: React.FC<{ recipeSent: RecipeData}> = ({ recipeSent } ) => {
  const { recipeName, prepTime, cookTime, totalTime, instructions, tags } = recipeSent;

  return (
    <div className="iconContainer" >
      <a href={`http://localhost:4000/api/recipes/${recipeName}`} target="_blank" key={recipeName}>
        <img className="image" src="src/images/placeholder.png" alt={recipeName} />
        <div className="overlay">
          <div className="text">{`${recipeName} - ${totalTime}`}</div>
        </div>
      </a>
    </div>
  );
};

export default RecipeIcon;