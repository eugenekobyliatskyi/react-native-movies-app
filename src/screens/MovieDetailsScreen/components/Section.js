import React from 'react';
import {View, StyleSheet} from 'react-native';
import {toNormalSize} from '../../../utils';

const Section = ({children}) => {
  return <View style={styles.section}>{children}</View>;
};

const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    padding: toNormalSize(30),
  },
});

export default Section;
