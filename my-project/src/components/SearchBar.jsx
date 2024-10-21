import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      console.log(`Searching for medicine: ${query}`);
      onSearch(query);
    } else {
      console.log('Please enter a search term');
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex justify-center mb-8">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a medicine..."
        className="border border-gray-300 p-2 rounded-l w-72 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
