import React from 'react';
import useRecipeStore from '../recipeStore';

const SearchBar = () => {
  const searchTerm = useRecipeStore(state => state.searchTerm);
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        marginBottom: '1rem',
        width: '100%',
        padding: '0.5rem',
        fontSize: '1rem'
      }}
    />
  );
};

export default SearchBar;
