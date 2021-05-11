import React, {useContext} from 'react';
import {StyleSheet, FlatList, Dimensions} from 'react-native';
import {GlobalContext} from '../context/Provider';
import Movie from './Movie';

function Movies({
  data,
  onPress = () => {},
  ListFooterComponent,
  onEndReached = () => {},
}) {
  const {state} = useContext(GlobalContext);

  return (
    <FlatList
      style={styles.container}
      data={data ?? state.movies}
      renderItem={({item}) => <Movie data={item} onPress={onPress} />}
      ListFooterComponent={ListFooterComponent}
      onEndReached={onEndReached}
    />
  );
}

const width = Dimensions.get('window').width;
const toNormalSize = n => (width * n) / 584;

const styles = StyleSheet.create({
  container: {
    padding: toNormalSize(30),
    backgroundColor: 'white',
  },
});

export default Movies;
