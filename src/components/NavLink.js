import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import React from 'react';
import { useNavigation } from '@react-navigation/native';

const NavLink = ({ routeName, text }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Text style={styles.link}>{text}</Text>
    </TouchableOpacity>
  );
};

export default NavLink;

const styles = StyleSheet.create({
  link: {
    color: 'blue',
  },
});
