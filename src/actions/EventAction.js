import firebase from 'firebase'
import { EVENT_UPDATE, EVENT_CREATE, EVENT_FETCH_SUCCESS } from './types'
import { Actions } from 'react-native-router-flux'

export const eventUpdate =  ({prop, value}) => {
    return {
        type: EVENT_UPDATE,
        payload: { prop, value }
    }
};

export const eventCreate = ({name, time ,date}) => {
    // const { currentUser } = firebase.auth()
    return (dispatch) => {
        firebase.database().ref(`/event/date/time`)
        .push({ name, time, date })
        .then(() => {
            dispatch({type: EVENT_CREATE})
            Actions.eventList({ type: 'reset' })
        })
    }
}

export const eventFetch = () => {
    // const { currentUser } = firebase.auth()
    return (dispatch) => {
        firebase.database().ref(`/event/date/time`)
        .on('value', snapshot => {
            dispatch({type: EVENT_FETCH_SUCCESS, payload: snapshot.val()})
        })
    }
}