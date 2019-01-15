import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import { firebaseConfig } from './utils/config';
import reducers from './reducers';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    //console.log(firebaseConfig);
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    //Async action creator oluşturabilmek için ReduxThunk paketi 
    //bir helper method olan applyMiddleware yardımıyla store'a argüman olarak veriliyor:
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
