import axios from 'axios';
import {apiUrl} from '../config/Consts'

export default class Api {
    constructor(){}
    async get(route,queryString = {}){
        const res = await axios.get(`${apiUrl}/${route}`,queryString);
        return res;
    }
    async post(route,data){
        const res = await axios.post(`${apiUrl}/${route}`,data);
        return res
    }
}
