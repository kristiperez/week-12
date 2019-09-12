import React from 'react';
import { connect } from 'react-redux';

function DisplayCart(props) {
    return (
        <div>{props.ctr}</div>
    );
}

const mapStateToProps = (state) => {
    return {
        // state.REDUCER.globalstateproperty
        ctr: state.ctrRed.counter 
    }
}

export default connect(mapStateToProps)(DisplayCart);
