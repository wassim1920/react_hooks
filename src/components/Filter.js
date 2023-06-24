import React from 'react';

const Filter = ({ title, rate, onTitleChange, onRateChange }) => {
  return (
    <div>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
      />
      <br />
      <label htmlFor="rate">Rating:</label>
      <input
        type="number"
        id="rate"
        value={rate}
        min="0"
        max="10"
        onChange={(e) => onRateChange(e.target.value)}
      />
    </div>
  );
};

export default Filter;
