import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const Movie = ({onPress, data}) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={() => onPress(data)}>
      <Image
        style={styles.poster}
        source={{
          uri: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
        }}
      />
      <View style={styles.description}>
        <View>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.info}>2001 | En</Text>
          <Text style={styles.info}>Animation, Comedy, Family</Text>
        </View>
        <View>
          <Text style={[styles.info, styles.voteAverage]}>
            {data.vote_average}
          </Text>
          <Text style={styles.info}>{data.status}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const width = Dimensions.get('window').width;
const toNormalSize = n => (width * n) / 720;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    marginBottom: toNormalSize(30),
  },
  poster: {
    width: toNormalSize(193),
    height: toNormalSize(289),
    borderRadius: toNormalSize(10),
  },
  description: {
    marginLeft: toNormalSize(30),
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    color: '#46515E',
    fontWeight: 'bold',
  },
  info: {
    color: '#808FA5',
    fontWeight: '400',
  },
  voteAverage: {
    fontWeight: 'bold',
  },
});

export default Movie;
