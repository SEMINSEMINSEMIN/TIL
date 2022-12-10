import React from 'react'

const InfoInput = ({label, inputAttr, handleChangeByUpper}) => {
  const handleChange = (e) => {
    handleChangeByUpper(e.target.value);
  }

  return (
    <label>
      {label}
      <input
        type={inputAttr.type}
        value={inputAttr.value}
        onChange={handleChange}
      />
    </label>
  );
};

export default InfoInput;