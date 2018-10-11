import axios from 'axios';
import { SET_SIMULATOR_DATA } from './type';

export function setSimulatorData(data, result) {
    return {
        type: SET_SIMULATOR_DATA,
        simulation: {
            name: data.name || '',
            money: data.money || 0,
            time: data.time || 0,
            result: result && result
        }
    }   
}

export function getSimulation(data, expr) {
    return dispatch => {
        return axios.post('http://api.mathjs.org/v4/', expr).then(res => {
            const result = res.data;
            dispatch(setSimulatorData(data, result));
        });
    }
}