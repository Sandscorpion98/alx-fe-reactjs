import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipeDetail() {
    const { id } = useParams(); 
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await fetch("/data.json"); 
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const jsonData = await response.json();
                const foundRecipe = jsonData.find((recipe) => recipe.id === parseInt(id));
                setRecipe(foundRecipe);
            } catch (error) {
                console.log("Error fetching recipe:", error);
            }
        };
        fetchRecipe();
    }, [id]);

    if (!recipe) {
        return <div className="text-center text-2xl py-10">Loading...</div>; 
    }

    return (
        <div className="container mx-auto p-6">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
               
                <img 
                    src={recipe.image} 
                    alt={recipe.title} 
                    className="w-full h-72 object-cover"
                />

                
                <div className="p-6">
                    <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
                    <p className="text-gray-700 text-lg mb-6">{recipe.summary}</p>
                    
                    
                    <div className="bg-gray-100 p-6 rounded-lg mb-6">
                        <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
                        {recipe.ingredients ? (
                            <ul className="list-disc list-inside text-gray-800">
                                {recipe.ingredients.map((ingredient, index) => (
                                    <li key={index} className="mb-2">{ingredient}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No ingredients available</p>
                        )}
                    </div>

                    
                    <div className="bg-gray-100 p-6 rounded-lg mb-6">
                        <h2 className="text-2xl font-semibold mb-4">Cooking Instructions</h2>
                        {recipe.instructions ? (
                            <p className="text-gray-800 leading-relaxed">{recipe.instructions}</p>
                        ) : (
                            <p>No instructions available</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecipeDetail;
