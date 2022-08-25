import { Button, Input, Text } from '@rneui/themed';
import React, { useContext, useState } from 'react';
import { StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';

import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import Spacer from '../components/Spacer';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
  const navigation = useNavigation();

  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <StatusBar />
      <AuthForm
        headerText='SignUp for Tracker'
        errorMessage={state.errorMessage}
        onSubmit={signup}
        buttonText='Sign Up'
      />
      <Spacer>
        <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
          <Text style={styles.link}>
            Already have an account? Signin instead.
          </Text>
        </TouchableOpacity>
      </Spacer>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    marginBottom: 200,
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 10,
  },
  link: {
    color: 'blue',
  },
});
