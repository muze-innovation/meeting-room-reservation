import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Route';

class App extends Component {
    componentWillMount(){
        const config = {
            apiKey: "AIzaSyDSrlDaAiak7wUNbFgdayLMtbfnyH5IVz4",
            authDomain: "queue-63aa1.firebaseapp.com",
            databaseURL: "https://queue-63aa1.firebaseio.com",
            projectId: "queue-63aa1",
            storageBucket: "queue-63aa1.appspot.com",
            messagingSenderId: "298314756611"
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers,{},applyMiddleware(ReduxThunk))
        return (
            <Provider store={store} >
                <Router />
            </Provider>
        );
    }
}


export default App;