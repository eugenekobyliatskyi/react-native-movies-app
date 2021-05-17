import React, {useContext} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {GlobalContext} from '../context/GlobalProvider';
import {Movie} from './index';
import {toNormalSize} from '../utils';

function Movies({data, onPress = () => {}, ListEmptyComponent = null}) {
  const {movies} = useContext(GlobalContext);

  const renderItem = ({item}) => <Movie data={item} onPress={onPress} />;
  const FooterComponent = <View style={{padding: toNormalSize(15)}} />;

  return (
    <FlatList
      style={styles.container}
      data={data ?? movies}
      renderItem={renderItem}
      ListEmptyComponent={ListEmptyComponent}
      ListFooterComponent={FooterComponent}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: toNormalSize(30),
    backgroundColor: 'white',
  },
});

export default Movies;
