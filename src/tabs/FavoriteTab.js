import React, {useContext} from 'react';
import {Movies, Search} from '../components';
import {GlobalContext} from '../context/Provider';

const FavoriteTab = () => {
  const {state} = useContext(GlobalContext);

  return (
    <>
      <Search />
      <Movies data={state.favorite} />
    </>
  );
};

export default FavoriteTab;
