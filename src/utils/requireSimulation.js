import React from 'react';
import { connect } from 'react-redux';
import history from '../routes/history';

export default function (ComposedComponent) {
    class VerifySimulation extends React.Component {
        componentWillMount() {
            if (!this.props.simulation.result) {       
                history.push('/');
            }
        }

        render() {
            return (
                <ComposedComponent {...this.props} />
            );
        }
    }

    function mapStateToProps(state) {
        return {
            simulation: state.simulation
        };
    }

    return connect(mapStateToProps, {})(VerifySimulation);
}