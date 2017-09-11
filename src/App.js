import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
