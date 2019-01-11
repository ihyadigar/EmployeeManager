import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDC7HX2ouENPlk8rIK1eGfOoq0IwTnRFf0',
      authDomain: 'employeemanager-d9b24.firebaseapp.com',
      databaseURL: 'https://employeemanager-d9b24.firebaseio.com',
      projectId: 'employeemanager-d9b24',
      storageBucket: 'employeemanager-d9b24.appspot.com',
      messagingSenderId: '134359240343'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
