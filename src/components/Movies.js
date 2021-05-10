import React from 'react';
import {StyleSheet, FlatList, Dimensions} from 'react-native';
import Movie from './Movie';

const Movies = ({data}) => {
  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={({item}) => <Movie {...item} />}
    />
  );
};

const width = Dimensions.get('window').width;
const toNormalSize = n => (width * n) / 720;

const styles = StyleSheet.create({
  container: {
    padding: toNormalSize(30),
  },
});

export default Movies;
