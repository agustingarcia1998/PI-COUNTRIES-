import axios from 'axios';

export function getCountries(){
    return async function(dispatch){
        const json = await axios.get('http://localhost:3001/countries');//conecto el front con el back

            return dispatch({
            type: "GET_COUNTRIES",
            payload: json.data
        })
    }
}

export function getActivities(){
    return async function(dispatch){
        const info = await axios.get('http://localhost:3001/activities');
        return dispatch({
            type: "GET_ACTIVITIES",
            payload: info.data
        })
    }
}

export function getNameCountries(name){
    return async function (dispatch) {
        try {
            var json = await axios.get('http://localhost:3001/countries?name=' + name);
        } catch (err) {
            console.log(err)
        } finally{
            if(json){
                return dispatch({
                    type: "GET_NAME_COUNTRIES",
                    payload:json.data
                })
            } else{
                return alert("Country/ies not found... try something else :)")
            }
        }
    }
}

export function orderByName(payload){
    return{
        type: "ORDER_BY_NAME",
        payload
    }
}

export function filterByContinent(payload){//en action solo despachamos un tipo
    return {
        type: "FILTER_BY_CONTINENT",
        payload
    }
}

export function filterActivity(payload){
    return {
        type: "FILTER_ACTIVITY",
        payload
    }
}

export function sortPopulation(payload){
    return {
        type: "SORT_POPULATION",
        payload
    }
}

export function detailsCountry(id){
    return async function (dispatch){
        try {
            let response = await axios.get(`http://localhost:3001/countries/${id}`)
            return dispatch({
                type: "GET_DETAILS",
                payload: response.data
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export function postActivity(data){
    return async function(dispatch){
        const info = await axios.post('http://localhost:3001/activities', data)
        console.log(info)
        return dispatch({
            type: "POST_ACTIVITY",
            payload: info
        })
    }
}


