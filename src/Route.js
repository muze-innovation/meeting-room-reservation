import React from 'react';
import { Scence, Router, Actions } from 'react-native-router-flux';
import LoginFrom from './components/LoginForm';
import EventList from './components/EventList';
import EventCreate from './components/EventCreate';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{paddingTop: 65}}>
            <Scence key="auth">
                <Scence
                    key="login"
                    component={LoginFrom}
                    title="Please Login"
                />
            </Scence>
            <Scence key="main" >
                <Scence
                    onRight={()=> Actions.eventCreate()}
                    rightTitle="Add"
                    key="eventList"
                    component={EventList}
                    title="EventList"
                />
                <Scence
                    key="eventCreate"
                    component={EventCreate}
                    title="Create Event"
                    
                />
            </Scence>
        </Router>
    )
}

export default RouterComponent;