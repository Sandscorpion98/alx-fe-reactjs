import useRecipeStore from "./recipeStore";

function EditRecipeForm() {


    const handleChange = (e) => {
        const { title, value } = e.target;
        setRecipe((prevRecipe) => ({
          ...prevRecipe,
          [title]: value,
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
            name="ingredients"
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
    )
}

export default EditRecipeForm