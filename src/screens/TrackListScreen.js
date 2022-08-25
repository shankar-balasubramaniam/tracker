import { Button, StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { useNavigation } from '@react-navigation/native';

const TrackListScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>TrackListScreen</Text>
      <Button
        title='Go to detail'
        onPress={() => navigation.navigate('TrackDetail')}
      />
    </View>
  );
};

export default TrackListScreen;

const styles = StyleSheet.create({});
