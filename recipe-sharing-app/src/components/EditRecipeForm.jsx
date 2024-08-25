import React, { useState, useEffect } from 'react';
import useRecipeStore from './recipeStore';

const EditRecipeForm = ({ recipeId }) => {
  const { recipes, updateRecipe } = useRecipeStore(state => ({
    recipes: state.recipes,
    updateRecipe: state.updateRecipe,
  }));
  
  const recipeToEdit = recipes.find(recipe => recipe.id === parseInt(recipeId));
  
  const [recipe, setRecipe] = useState({
    title: '',
    description: ''
  });

  useEffect(() => {
    if (recipeToEdit) {
      setRecipe(recipeToEdit); 
    }
  }, [recipeToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe(prevRecipe => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe(recipe); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Recipe Name:
          <input
            type="text"
            name="title"
            value={recipe.title}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Ingredients:
          <textarea
            name="description"
            value={recipe.description}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <button type="submit">Save Changes</button>
      </div>
    </form>
  );
};

export default EditRecipeForm;
