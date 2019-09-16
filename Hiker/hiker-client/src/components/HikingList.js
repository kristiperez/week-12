import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../store/actions/actionCreators'

function HikingList(props) {
    //local state
    
    // use Effect replaces componentDidMount and componentDidUpdate
    useEffect(() => {
        //get the data
        props.onHikingLocationsLoaded()
        //fetchHikingLocations() // moved into action creators
    },[]) // empty array as second argument is saying that there are no
    //dependencies for the useEffect to be called again.

    /* deleted becasue we moved it into the action creators 

    const fetchHikingLocations = () => {
        fetch('http://localhost:3001/all-locations')
        .then(response => response.json())
        .then(json => {
            props.onHikingLocationsLoaded(json)
        })
    } */
    // where does hikingLocations come from
    return <div>
        {props.hikingLocations.map(location => {
            return <div>{location.latitude}, {location.longitude}</div>
        })}
    </div>

}

const mapDispatchToProps = (dispatch) => {
    return {
        onHikingLocationsLoaded: () => dispatch(actionCreators.hikingDataFetched())
    }
}

const mapStateToProps = (state) => {
    return {
        hikingLocations: state.locations // props.hikingLocations
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HikingList)

function DisplayHikes(props) {
    return (
        <div>
            {props.myHikes.map(hike => {{

            }})}
            'https://www.latlong.net/c/?lat=40.785091&long=-73.968285'

        </div>
    )
}