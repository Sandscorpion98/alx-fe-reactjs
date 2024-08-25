import { create } from "zustand";



const useRecipeStore = create(set => ({

    recipes: [],
    addRecipe: (newRecipe) => set(state => ({recipes:[...state.recipes, newRecipe]})),
    setRecipes: (recipes) => set({recipes}),
    deleteRecipe: (id) => set((state) => ({recipes: state.recipes.filte((recipe) => recipe.id !== id)})),
    updateRecipe: (updateRecipe) => set((state) => ({
        recipes: state.recipes.map((recipe) => recipe.id === updateRecipe.id ? updateRecipe : recipe)
    }))
}))


export default useRecipeStore