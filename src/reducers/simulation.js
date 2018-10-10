import { SET_SIMULATOR_DATA } from "../actions/type";

export default (state = [], action = {}) => {
    switch(action.type) {
        case SET_SIMULATOR_DATA:
            return action.simulation
        default:
            return state;
    }
}