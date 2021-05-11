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
  const {
    release_date,
    genres: _genres,
    spoken_languages,
    poster_path,
    title,
    vote_average,
    status,
  } = data;
  const yearOfRelease = release_date.split('-')[0];
  const genres = _genres.map(({name}) => name).join(', ');
  const languages = spoken_languages
    .map(({iso_639_1}) => iso_639_1.toUpperCase())
    .join(', ');

  return (
    <TouchableOpacity style={styles.wrapper} onPress={() => onPress(data)}>
      <Image
        style={styles.poster}
        source={{
          uri: `https://image.tmdb.org/t/p/w500${poster_path}`,
        }}
      />
      <View style={styles.description}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.info}>
            {yearOfRelease} | {languages}
          </Text>
          <Text style={styles.info}>{genres}</Text>
        </View>
        <View>
          <Text style={[styles.info, styles.voteAverage]}>{vote_average}</Text>
          <Text style={styles.info}>{status}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const width = Dimensions.get('window').width;
const toNormalSize = n => (width * n) / 584;

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
