import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {toNormalSize} from '../utils';

const Favorite = ({active, onPress = () => {}}) => {
  let iconName, color;

  if (active) {
    iconName = 'favorite';
    color = 'tomato';
  } else {
    iconName = 'favorite-border';
    color = 'gray';
  }

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.6}>
      <MaterialIcons name={iconName} size={26} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: toNormalSize(20),
  },
});

export default Favorite;
