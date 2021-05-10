import React from 'react';
import {StyleSheet, View, Dimensions, ScrollView} from 'react-native';
import Movie from '../components/Movie';

const HomeScreen = () => {
  return (
    <View>
      <ScrollView style={styles.container}>
        <Movie />
        <Movie />
        <Movie />
      </ScrollView>
    </View>
  );
};

const width = Dimensions.get('window').width;
const toNormalSize = n => (width * n) / 720;

const styles = StyleSheet.create({
  container: {
    padding: toNormalSize(30),
  },
});

export default HomeScreen;
