import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signup':
      return { ...state, token: action.payload, errorMessage: '' };
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    // Make api request to signup
    // Handle success by modifying state
    // Handle failure by showing error message
    try {
      const response = await trackerApi.post('/signup', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'signup', payload: response.data.token });
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with sign up',
      });
    }
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    // Make api request to signin
    // Handle success by modifying state
    // Handle failure by showing error message
  };
};

const signout = (dispatch) => {
  return () => {
    // Make api request to signout
  };
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { token: null, errorMessage: '' }
);
