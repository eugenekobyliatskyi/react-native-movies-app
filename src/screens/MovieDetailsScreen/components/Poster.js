import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {toNormalSize} from '../../../utils';

const Poster = ({path, title}) => {
  return (
    <View>
      <Image
        style={styles.poster}
        source={{
          uri: `https://image.tmdb.org/t/p/w500${path}`,
        }}
      />
      <View style={styles.background} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  poster: {
    width: '100%',
    height: toNormalSize(350),
  },
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: toNormalSize(30),
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Poster;
