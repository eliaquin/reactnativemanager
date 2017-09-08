import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LoginForm from './components/LoginForm';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyBytJ69f3XsnWlx_-HeGWxF4IEuLccSrq4",
            authDomain: "manager-7ff58.firebaseapp.com",
            databaseURL: "https://manager-7ff58.firebaseio.com",
            projectId: "manager-7ff58",
            storageBucket: "manager-7ff58.appspot.com",
            messagingSenderId: "793075879003"
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