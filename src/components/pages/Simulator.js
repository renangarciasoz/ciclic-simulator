import React from 'react';
import { connect } from 'react-redux';
import { simulatorData } from '../../actions/simulator';
import styled from 'styled-components';
import logo from '../../assets/ciclic.svg';

import Figure from '../organisms/Figure'
import Form from '../organisms/Form';
import Fieldset from '../organisms/Fieldset';
import Button from '../organisms/Button';

const SimulatorWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;
`

class Simulator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Nome',
            money: 1,
            time: 1
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        this.props.simulatorData(this.state);
    }

    onSubmit(data) {
        this.setState(data);
        this.props.simulatorData(this.state);
    }

    render() {
        return (
            <SimulatorWrapper>
                <Figure src={logo} alt="ciclic logo"/>
                <Form onSubmit={this.onSubmit} data={this.props.simulation}>
                    <Fieldset label="nome" Name/>
                    <Fieldset label="mensalidade"/>
                    <Fieldset label="tempo"/>
                    <Button text="Simular" type="submit"/>
                </Form>
            </SimulatorWrapper>
        );
    }
}

function mapStateToProps(state) {
    return {
        simulation: state.simulation
    };
}

export default connect(mapStateToProps, {simulatorData})(Simulator);