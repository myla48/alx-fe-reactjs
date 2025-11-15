import { useNavigate } from 'react-router-dom';
import useRecipeStore from '../recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    // After deletion, navigate back to home (recipe list)
    navigate('/');
  };

  return (
    <button onClick={handleDelete} style={{ marginTop: '1rem' }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
