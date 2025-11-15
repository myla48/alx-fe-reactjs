import { Link } from 'react-router-dom';
import useRecipeStore from '../recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';
import SearchBar from './SearchBar';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const searchTerm = useRecipeStore(state => state.searchTerm);

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Recipes</h2>
      <SearchBar />
      {filteredRecipes.length === 0 ? (
        <p>No recipes match your search.</p>
      ) : (
        filteredRecipes.map(recipe => (
          <div key={recipe.id} style={{ marginBottom: '1rem' }}>
            <h3>
              {/* ✅ Link from react-router-dom */}
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
            <DeleteRecipeButton recipeId={recipe.id} />
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
