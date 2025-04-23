import React from 'react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  searchTerm, 
  onSearchChange,
  placeholder = "Buscar ejercicios..." 
}) => {
  return (
    <div className="mb-8">
      <div className="relative">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full p-4 border-2 border-gray-900 rounded-lg 
                    focus:ring-2 focus:ring-gray-900 focus:border-gray-900
                    transition-all duration-200 ease-in-out
                    placeholder-gray-500 outline-none"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        {searchTerm && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-4 top-1/2 transform -translate-y-1/2
                      text-gray-500 hover:text-gray-900 transition-colors
                      bg-gray-100 hover:bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center"
            aria-label="Limpiar búsqueda"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;