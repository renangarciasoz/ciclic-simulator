// import axios from 'axios';
import { SET_SIMULATOR_DATA } from './type';

export function setSimulatorData(value, resultApi) {
    return {
        type: SET_SIMULATOR_DATA,
        simulation: {
            name: value && value.name,
            money: value && value.money,
            time: value && value.time,
            resultApi: resultApi && resultApi
        }
    }   
}

export function simulatorData(value) {
    return dispatch => {
        dispatch(setSimulatorData(value));
    }
}