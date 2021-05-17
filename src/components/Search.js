import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {toNormalSize} from '../utils';

const Search = ({onChangeText}) => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Search"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 56,
    backgroundColor: 'white',
    paddingHorizontal: toNormalSize(30),
    paddingVertical: toNormalSize(10),

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  input: {
    borderBottomColor: '#808FA5',
    borderBottomWidth: 1,
    padding: 3,
  },
});

export default Search;
