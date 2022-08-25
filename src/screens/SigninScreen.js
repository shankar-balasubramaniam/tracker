import { Button, StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { useNavigation } from '@react-navigation/native';

const SigninScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={{ fontSize: 50 }}>SigninScreen</Text>
      <Button
        title='Go to main flow'
        onPress={() => navigation.navigate('MainBottomTab')}
      />
    </View>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({});
