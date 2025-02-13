import React from 'react';

const FilterSelect = ({ options, value, onChange }) => {
  return (
    <select
      className="border rounded p-2"
      value={value}
      onChange={onChange}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default FilterSelect;