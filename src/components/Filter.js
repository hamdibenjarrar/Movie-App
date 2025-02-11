import React from 'react';

const Filter = ({ titleFilter, rateFilter, setTitleFilter, setRateFilter }) => (
  <div className="filter-container">
    <input
      type="text"
      placeholder="Search by title..."
      value={titleFilter}
      onChange={(e) => setTitleFilter(e.target.value)}
    />
    <div className="rate-filter">
      <label>Minimum Rating: </label>
      <input
        type="range"
        min="0"
        max="10"
        value={rateFilter}
        onChange={(e) => setRateFilter(Number(e.target.value))}
      />
      <span>{rateFilter}</span>
    </div>
  </div>
);

export default Filter;