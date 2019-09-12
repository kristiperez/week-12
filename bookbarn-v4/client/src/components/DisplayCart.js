import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';

function DisplayCart(props) {
    return (
        <div className="Counter">
        <Button variant="secondary">
        Cart <Badge variant="light">{props.ctr}</Badge>
        </Button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        // state.REDUCER.globalstateproperty
        ctr: state.ctrRed.counter 
    }
}

export default connect(mapStateToProps)(DisplayCart);
