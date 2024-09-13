import { useState } from "react";

function AddRecipeForm() {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [steps, setSteps] = useState("");
    const [errors, setErrors] = useState({});

    
    const validateForm = () => {
        const newErrors = {};
        if (!title.trim()) {
            newErrors.title = "Recipe title is required";
        }
        if (!ingredients.trim()) {
            newErrors.ingredients = "Ingredients are required";
        } else if (ingredients.split("\n").length < 2) {
            newErrors.ingredients = "Please provide at least two ingredients";
        }
        if (!steps.trim()) {
            newErrors.steps = "Preparation steps are required";
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        const recipeData = {
            title: title.trim(),
            ingredients: ingredients.split("\n"),
            steps: steps.trim(),
        };

        console.log("Recipe Submitted:", recipeData);

        
        setTitle("");
        setIngredients("");
        setSteps("");
        setErrors({});
    };

    return (
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-gray-100 shadow-lg rounded-lg">
            <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Add New Recipe</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Recipe Title
                    </label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter recipe title"
                        className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-200 focus:outline-none ${
                            errors.title ? "border-red-500" : "border-gray-300"
                        }`}
                        required
                    />
                    {errors.title && <p className="text-red-500 text-xs mt-2">{errors.title}</p>}
                </div>

              
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ingredients">
                        Ingredients (one per line)
                    </label>
                    <textarea
                        id="ingredients"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        placeholder="Enter ingredients, one per line"
                        className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-200 focus:outline-none ${
                            errors.ingredients ? "border-red-500" : "border-gray-300"
                        }`}
                        rows="5"
                        required
                    />
                    {errors.ingredients && <p className="text-red-500 text-xs mt-2">{errors.ingredients}</p>}
                </div>

              
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="steps">
                        Preparation Steps
                    </label>
                    <textarea
                        id="steps"
                        value={steps}
                        onChange={(e) => setSteps(e.target.value)}
                        placeholder="Enter preparation steps"
                        className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-200 focus:outline-none ${
                            errors.steps ? "border-red-500" : "border-gray-300"
                        }`}
                        rows="5"
                        required
                    />
                    {errors.steps && <p className="text-red-500 text-xs mt-2">{errors.steps}</p>}
                </div>

                
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Submit Recipe
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddRecipeForm;
