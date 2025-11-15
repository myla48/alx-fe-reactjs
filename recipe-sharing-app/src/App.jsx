import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <Router>
      <div style={{ padding: '2rem' }}>
        <h1>🍲 Recipe Sharing App</h1>
        <AddRecipeForm />
        <Routes>
          {/* Home route shows the recipe list */}
          <Route path="/" element={<RecipeList />} />

          {/* Details route shows a single recipe by ID */}
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
