import React from 'react';
import { connect } from 'react-redux';

class Simulation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                {this.props.simulation.name}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        simulation: state.simulation
    };
}

export default connect(mapStateToProps, null)(Simulation);