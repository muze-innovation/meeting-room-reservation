import {
    EVENT_UPDATE,
    EVENT_CREATE
} from '../actions/types'

const INITIAL_STATE = {
    name: '',
    time: '',
    date: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case EVENT_UPDATE:
            return {...state, [action.payload.prop]: action.payload.value}
        case EVENT_CREATE:
            return INITIAL_STATE
        default: 
        return state
    } 
}