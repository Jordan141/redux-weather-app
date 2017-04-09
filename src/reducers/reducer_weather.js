import {FETCH_WEATHER} from '../actions/index'

export default function(state = [], action){
    switch(action.type){
      case FETCH_WEATHER:
        //Not push, don't want to mutate state
        return [action.payload.data,...state];
    }
    return state;
}
