import React from 'react';
import { WorkCategories, Sort } from '../index';

const FilterSection = ({ filterWorks, categories }) => {
  return (
    <div>
      <WorkCategories filterWorks={filterWorks} categories={categories} />
      <Sort />
    </div>
  );
};

export default FilterSection;
