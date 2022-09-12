import React, { useContext, useEffect } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import Spacer from '../components/Spacer';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
  const navigation = useNavigation();

  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  useEffect(() => {
    const listener = navigation.addListener('blur', clearErrorMessage);
    return listener;
  }, []);

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
        <NavLink
          text='Already have an account? Sign in instead!'
          routeName='Signin'
        />
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
});
