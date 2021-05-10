import React from 'react';
import {Movies, Search} from '../components';

const FavoriteTab = () => {
  return (
    <>
      <Search />
      <Movies data={[{id: 1}]} />
    </>
  );
};

export default FavoriteTab;
