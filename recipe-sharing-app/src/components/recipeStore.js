import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  // State: list of recipes
  recipes: [],

  // Search state
  searchTerm: '',

  // Action: add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  // Action: replace the entire recipe list
  setRecipes: (recipes) => set({ recipes }),

  // Action: update search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Action: delete a recipe by ID
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  // Action: update a recipe by ID
  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    })),
}));

export default useRecipeStore;
