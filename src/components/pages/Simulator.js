import React from 'react';
import { connect } from 'react-redux';
import { getSimulation } from '../../actions/simulator';
import styled from 'styled-components';
import logo from '../../assets/ciclic.svg';
import history from '../../routes/history';

import Figure from '../organisms/Figure';
import Form from '../organisms/Form';
import Fieldset from '../organisms/Fieldset';
import Button from '../organisms/Button';

const SimulatorWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 450px;
`

class Simulator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            money: 0,
            time: 12,
            disable: false
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // Gerar as opções do select de anos.
    getOptionsSelect(){
        let options = []

        for(let i = 1; i < 100; i++) {
            options.push({value: i * 12, text: `${i === 1 ? i + ' ano': i + ' anos'}`})
        }

        return options
    }

    // Formata o dado da expressão para ativar a action que realiza o POST para API.
    // Se vier uma resposta enviar para a próxima página, ou se vier um erro exibir um warning no console.
    onSubmit(data) {
        this.setState({disable: true})

        let dataPost = {
            'expr': `${data.money} * (((1 + 0.00517) ^ ${parseInt(data.time)} - 1) / 0.00517)`
        }

        this.props.getSimulation(data, dataPost).then(
            (res) => history.push('/simulation'),
            (err) => {
                console.warn('Erro com a API') 
                this.setState({disable: false})
            }
        );
    }

    // Função que atualiza o state de cada fieldset(money, time e text) conforme o campo.
    handleChange(data, product) {
        if(product === 'time') {
            return this.setState({time: data})
        }

        if(product === 'money') {
            return this.setState({money: data})
        }

        return this.setState({name: data})
    }

    disableBtn(){
        return this.state.money !== 0 && this.state.time !== 0 && this.state.name !== '';
    }

    render() {
        return (
            <SimulatorWrapper>
                <Figure src={logo} alt="ciclic logo"/>
                <Form onSubmit={this.onSubmit} data={this.state} onChange={this.onChangeForm}>
                    <Fieldset label="Meu nome é" handleChange={this.handleChange} autofocus/>
                    <Fieldset money label="irei fazer depósitos de" handleChange={this.handleChange}/>
                    <Fieldset select options={this.getOptionsSelect()} label="durante" handleChange={this.handleChange} data={this.state}/>
                    <Button text="Simular" type="submit" disabled={!this.disableBtn() || this.state.disable}/>
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

export default connect(mapStateToProps, {getSimulation})(Simulator);