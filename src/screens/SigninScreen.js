import { StyleSheet, View } from 'react-native';

import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import React from 'react';
import Spacer from '../components/Spacer';
import { useNavigation } from '@react-navigation/native';

const SigninScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <AuthForm
        headerText='Sign In to Tracker'
        errorMessage=''
        buttonText='Sign In'
        onSubmit={() => {}}
      />
      <Spacer>
        <NavLink
          routeName='Signup'
          text="Don't have an account? Sign up instead"
        />
      </Spacer>
    </View>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    marginBottom: 200,
  },
});
