import React from "react";

const FilterDropdown = ({ options, selectedOptions, onChange }) => {
  const handleSelectionChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      onChange([...selectedOptions, value]);
    } else {
      onChange(selectedOptions.filter((option) => option !== value));
    }
  };

  return (
    <div className="mt-4">
      <label className="block mb-2">Multi Filter:</label>
      <div>
        {options.map((option) => (
          <div key={option} className="flex items-center">
            <input
              type="checkbox"
              id={option}
              value={option}
              onChange={handleSelectionChange}
              checked={selectedOptions.includes(option)}
              className="mr-2"
            />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterDropdown;