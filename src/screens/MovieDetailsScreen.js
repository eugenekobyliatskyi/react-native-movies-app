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

const MoviesDetailsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Image
          style={styles.poster}
          source={{
            uri: 'https://image.tmdb.org/t/p/w500/sgheSKxZkttIe8ONsf2sWXPgip3.jpg',
          }}
        />
        <View style={styles.background}></View>
        <Text style={styles.title}>Monsters, Inc.</Text>
      </View>
      <Section>
        <Group title="Duration" info="02h 15m" />
        <Group title="Genre" info="Animation, Comedy, Family" />
        <Group title="Language" info="English" />
      </Section>
      <Section>
        <Group
          title="Overview"
          info="James Sullivan and Mike Wazowski are monsters, they earn their
            living scaring children and are the best in the business... even
            though they're more afraid of the children than they are of them.
            When a child accidentally enters their world, James and Mike
            suddenly find that kids are not to be afraid of and they uncover a
            conspiracy that could threaten all children across the world."
        />
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

export default MoviesDetailsScreen;
