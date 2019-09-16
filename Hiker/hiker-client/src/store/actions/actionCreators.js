import * as actionTypes from './actionTypes'

export const hikingDataFetched = () => {
    
    return dispatch => {
        //fectch all hikijng locations
        fetch('http://localhost:3001/all-locations')
        .then(response => response.json())
        .then(json => {
            dispatch({type: actionTypes.HIKING_DATA_LOADED, payload: json})
        })
    }
}