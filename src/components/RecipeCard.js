// src/components/RecipeCard.js
import React from "react";
import "./RecipeCard.css"; // Import the newly created CSS file

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.title} className="recipe-img" />
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>
      <a href={`/recipe/${recipe.id}`} className="view-recipe-btn">
        View Recipe
      </a>
    </div>
  );
};

export default RecipeCard;
