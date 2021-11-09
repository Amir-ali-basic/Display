import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useGlobalContext } from '../../context/Context';
import { WorkCategories, WorkGrid, WorkList } from '../../components/index';

import './Works.css';

const Works = () => {
  const { items, fetchProjects, isLoading } = useGlobalContext();
  // u niz sa svim kategorijama dodajemo kategoriju sve, i kategoriju all koja nema projekte

  const [works, setWorks] = useState(items);
  useEffect(() => {
    fetchProjects();
    setWorks(items);
  }, []);

  const allCategories = [
    'All',
    'Applications',
    ...new Set(items.map((item) => item.category)),
  ];

  const [categories, setCategories] = useState(allCategories);

  //ispitujemo kojoj kategoriji pripada projekat
  const filterWorks = (category) => {
    if (category === 'All') {
      setWorks(items);
      return;
    }
    const newWorks = items.filter((work) => work.category === category);
    setWorks(newWorks);
  };
  // state za grid prikaz
  const [gridView, setGridView] = useState(true);

  return (
    <main>
      <Helmet>
        <title>Display | Projects</title>
        <meta name='description' content='best digital agency' />
      </Helmet>
      <section>
        <div className='container-fluid about-header'>
          <div className='container  h-100 d-flex align-items-center'>
            <h2 className='clr-white text-uppercase mb-0'>
              Check out what can i do
            </h2>
          </div>
        </div>
        <WorkCategories
          filterWorks={filterWorks}
          categories={categories}
          setGridView={setGridView}
          gridView={gridView}
        />
        {gridView === true ? (
          <WorkGrid works={works}></WorkGrid>
        ) : (
          <WorkList works={works} />
        )}
      </section>
    </main>
  );
};

export default Works;
