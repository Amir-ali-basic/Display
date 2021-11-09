import React from 'react';
import { IoGrid, IoMenu, IoReorderFour } from 'react-icons/io5';

const WorkCategories = ({ filterWorks, categories, setGridView, gridView }) => {
  return (
    <div className='container  categories py-4 '>
      <div className='filter-btn-container'>
        {categories.length &&
          categories.map((category, index) => {
            return (
              <button
                className='btn-filter '
                key={index}
                type='button'
                onClick={() => filterWorks(category)}
              >
                {category}
              </button>
            );
          })}
      </div>
      <div className='sort-btn-container'>
        <IoGrid
          className={`${gridView ? 'active-sort-icon' : 'sort-icon'}`}
          onClick={() => setGridView(true)}
        ></IoGrid>
        <IoReorderFour
          className={`${
            !gridView ? 'sort-icon active-sort-icon' : 'sort-icon'
          }`}
          onClick={() => setGridView(false)}
        ></IoReorderFour>
      </div>
    </div>
  );
};

export default WorkCategories;
