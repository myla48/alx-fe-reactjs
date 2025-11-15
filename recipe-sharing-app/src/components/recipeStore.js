import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  favorites: [],
  recommendations: [],

  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  setRecipes: (recipes) => set({ recipes }),
  setSearchTerm: (term) => set({ searchTerm: term }),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
      favorites: state.favorites.filter(favId => favId !== id), // remove from favorites too
    })),

  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    })),

  // ⭐ Favorites
  addFavorite: (id) =>
    set((state) => ({
      favorites: [...state.favorites, id],
    })),

  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter(favId => favId !== id),
    })),

  // 🔮 Recommendations (simple mock logic)
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        recipe =>
          state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));

export default useRecipeStore;
