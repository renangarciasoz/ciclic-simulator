import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Button from '../organisms/Button';

const SimulationComponent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    span {
        text-align: center;
        color: ${props => props.theme.primary};
    }

    @media screen and (max-width: 800px) {
        height: 60vh;

        span {
            padding: 0 25px;
        }
    }
`

class Simulation extends React.Component {
    
    // Função que formata o number para R$.
    format(data){
        return data && data.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })
    }

    render() {
        const { simulation } = this.props;

        return (
            <SimulationComponent>
                <span>
                    Olá {simulation.name}, juntando {this.format(simulation.money && simulation.money)} todo mês, você terá {this.format(simulation.result && parseInt(simulation.result.result))} em {simulation.time / 12 === 1 ? `1 ano` : `${simulation.time / 12} anos`}.
                </span>
                <Button text="Simular novamente" to="/"/>
            </SimulationComponent>
        );
    }
}

function mapStateToProps(state) {
    return {
        simulation: state.simulation
    };
}

export default connect(mapStateToProps, null)(Simulation);