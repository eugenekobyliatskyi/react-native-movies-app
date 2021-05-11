import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  Dimensions,
} from 'react-native';

const Section = ({children}) => {
  return <View style={styles.section}>{children}</View>;
};

const Group = ({title, info}) => {
  return (
    <View style={styles.group}>
      <Text style={styles.subtitle}>{title}</Text>
      <Text style={styles.info}>{info}</Text>
    </View>
  );
};

const MovieDetailsScreen = ({route}) => {
  const {
    movie: {
      poster_path,
      title,
      overview,
      runtime: _runtime,
      genres: _genres,
      spoken_languages,
    },
  } = route.params;

  const hours = Math.floor(_runtime / 60).toString();
  const minutes = (_runtime % 60).toString();
  const runtime = `${hours.length === 1 ? `0${hours}` : hours}h ${
    minutes.length === 1 ? `0${minutes}` : minutes
  }m`;
  const genres = _genres.map(({name}) => name).join(', ');
  const languages = spoken_languages
    .map(({english_name}) => english_name)
    .join(', ');

  return (
    <ScrollView style={styles.container}>
      <View>
        <Image
          style={styles.poster}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${poster_path}`,
          }}
        />
        <View style={styles.background}></View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Section>
        <Group title="Duration" info={runtime} />
        <Group title="Genre" info={genres} />
        <Group title="Languages" info={languages} />
      </Section>
      <Section>
        <Group title="Overview" info={overview} />
      </Section>
    </ScrollView>
  );
};

const width = Dimensions.get('window').width;
const toNormalSize = n => (width * n) / 720;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  section: {
    flexDirection: 'row',
    padding: toNormalSize(30),
  },
  group: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: toNormalSize(5),
  },
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
  subtitle: {
    fontSize: 16,
    color: '#46515E',
    fontWeight: 'bold',
    marginBottom: toNormalSize(5),
  },
  info: {
    color: '#808FA5',
    fontWeight: '400',
  },
});

export default MovieDetailsScreen;
