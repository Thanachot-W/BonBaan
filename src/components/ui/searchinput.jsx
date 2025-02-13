import React from 'react';
import { SearchIcon } from 'lucide-react';

const SearchInput = ({ placeholder, value, onChange }) => {
  return (
    <div className="relative w-64">
      <input
        type="text"
        className="border rounded p-2 w-64"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <SearchIcon className="w-5 h-5 text-gray-700 absolute right-3 top-1/2 transform -translate-y-1/2" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute right-3 top-2 transform"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    </div>
  );
};

export default SearchInput;