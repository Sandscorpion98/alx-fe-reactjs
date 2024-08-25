import React from 'react';
import useRecipeStore from './recipeStore';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar'; 
import '../App.css'; 

const RecipeList = () => {
  
  const { filteredRecipes } = useRecipeStore(state => ({
    filteredRecipes: state.filteredRecipes
  }));

  return (
    <div className="recipe-list-container">
      
      <SearchBar className="search-bar" />

      
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map(recipe => (
          <div key={recipe.id} className="recipe-item">
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>
          </div>
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;
