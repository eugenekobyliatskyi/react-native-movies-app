import React from 'react';
import {Movies} from '../components';

const HomeScreen = ({navigation}) => {
  return (
    <Movies
      data={[{id: 1}, {id: 2}, {id: 3}, {id: 4}]}
      onPress={() => navigation.navigate('Movie details')}
    />
  );
};

export default HomeScreen;
