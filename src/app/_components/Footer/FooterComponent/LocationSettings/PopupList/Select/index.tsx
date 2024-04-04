import React from 'react'

const SelectComponent = ({ options, onSelect }) => {

  const handleChange = (event) => {
    const selectedOption = event.target.value;
    onSelect(selectedOption);
  };

  return (
    <select onChange={handleChange}>
      {options.map((option) => (
        <option key={option.linkForLocationSettings.country} value={option.linkForLocationSettings.country}>
          {option.linkForLocationSettings.country}
        </option>
      ))}
    </select>
  );
};

export default SelectComponent;