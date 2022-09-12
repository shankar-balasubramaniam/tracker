import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signin':
      return { ...state, token: action.payload, errorMessage: '' };
    case 'clear_error_message':
      return { ...state, errorMessage: '' };
    case 'loading':
      return { ...state, loading: action.payload };
    case 'signout':
      return { token: '' };
    default:
      return state;
  }
};

const setLoading = (dispatch) => (loading) => {
  dispatch({ type: 'loading', payload: loading });
};

const tryLocalSignIn = (dispatch) => () => {
  dispatch({ type: 'loading', payload: true });
  const getToken = async () => await AsyncStorage.getItem('token');
  getToken()
    .then((token) => {
      if (token) {
        dispatch({ type: 'signin', payload: token });
      }
      dispatch({ type: 'loading', payload: false });
    })
    .catch((error) => console.log(error));
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: 'clear_error_message' });
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    // Make api request to signup
    // Handle success by modifying state
    // Handle failure by showing error message
    try {
      const response = await trackerApi.post('/signin', { email, password });
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
  return async ({ email, password }) => {
    // Make api request to signin
    // Handle success by modifying state
    // Handle failure by showing error message
    try {
      const response = await trackerApi.post('/signin', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'signin', payload: response.data.token });
    } catch (err) {
      console.log(err);
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with sign in',
      });
    }
  };
};

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'signout' });
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage, tryLocalSignIn },
  { token: null, errorMessage: '', loading: false }
);
