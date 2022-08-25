import { Button, Input, Text } from '@rneui/themed';
import React, { useContext, useState } from 'react';
import { StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';

import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/Spacer';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <StatusBar />
      <Spacer>
        <Text h3>SignUp for Tracker</Text>
      </Spacer>
      <Input
        label='Email'
        value={email}
        onChangeText={setEmail}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <Input
        label='Password'
        value={password}
        onChangeText={setPassword}
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry
      />
      {state.errorMessage ? (
        <Text style={styles.errorMessage}>{state.errorMessage}</Text>
      ) : null}
      <Spacer />
      <Button title='SignUp' onPress={() => signup({ email, password })} />
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
