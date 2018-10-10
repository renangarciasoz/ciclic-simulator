import React from 'react';
import { connect } from 'react-redux';
import { simulatorData } from '../actions/simulator'

class Simulator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Nome',
            money: 1,
            time: 1
        }
    }

    componentDidMount() {
        this.props.simulatorData(this.state);
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
    console.log(state)
    return {
        simulation: state.simulation
    };
}

export default connect(mapStateToProps, {simulatorData})(Simulator);