import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Section, Block, Poster} from './components';

const MovieDetailsScreen = ({route}) => {
  const {
    movie: {genres: _genres, original_language, overview, poster_path, title},
  } = route.params;

  const genres = _genres.map(({name}) => name).join(', ');
  const language =
    original_language[0].toUpperCase() + original_language.substring(1);

  return (
    <ScrollView style={styles.container}>
      <Poster path={poster_path} title={title} />
      <Section>
        <Block title="Genre" info={genres} />
        <Block title="Language" info={language} />
      </Section>
      <Section>
        <Block title="Overview" info={overview} />
      </Section>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});

export default MovieDetailsScreen;
