import React from 'react';
import { CustomSearch, DragAndDrop, SitesContainer } from '../components';

const SitesPage = () => {
  return (
    <SitesContainer>
      <h2>Добавьте свой сайт в Veiia</h2>
      <CustomSearch />
      <DragAndDrop />
    </SitesContainer>
  );
};

export default SitesPage;
