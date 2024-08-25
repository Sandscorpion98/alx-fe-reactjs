import { create } from "zustand";



const useRecipeStore = create(set => ({

    recipes: [],
    addRecipe: (newRecipe) => set(state => ({recipes:[...state.recipes, newRecipe]})),
    setRecipes: (recipes) => set({recipes}),
    deleteRecipe: (id) => set((state) => ({recipes: state.recipes.filter((recipe) => recipe.id !== id)})),
    updateRecipe: (updateRecipe) => set((state) => ({
        recipes: state.recipes.map((recipe) => recipe.id === updateRecipe.id ? updateRecipe : recipe)
    })),
    searchTerm: '',
    setSearchTerm: (term) => set({ searchTerm: term }),
    filteredRecipes: [],
    filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()))
    }))
}))


export default useRecipeStore