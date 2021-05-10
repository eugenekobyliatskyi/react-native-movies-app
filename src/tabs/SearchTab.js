import React from 'react';
import {Movies, Search} from '../components';

const SearchTab = () => {
  return (
    <>
      <Search />
      <Movies data={[{id: 1}, {id: 2}, {id: 3}, {id: 4}]} />
    </>
  );
};

export default SearchTab;
