import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {toNormalSize} from '../utils';

const Favorite = ({active, onPress = () => {}}) => {
  const status = active ? 'active' : 'inactive';

  const state = {
    active: {
      iconName: 'favorite',
      color: 'tomato',
    },
    inactive: {
      iconName: 'favorite-border',
      color: 'gray',
    },
  };

  const {iconName, color} = state[status];

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.6}>
      <MaterialIcons name={iconName} size={26} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: toNormalSize(20),
  },
});

export default Favorite;
