import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {toNormalSize} from '../../../utils';

const Block = ({title, info}) => {
  return (
    <View style={styles.group}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.info}>{info}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  group: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: toNormalSize(5),
  },
  title: {
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

export default Block;
