import React from 'react';
import { connect } from 'react-redux';
import { simulatorData } from '../../actions/simulator';
import styled from 'styled-components';
import logo from '../../assets/ciclic.svg';

const SimulatorWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;
`

const Logo = styled.img`
    width: 230px;
`

const Form = styled.form`
    width: 80%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    `
    
const Fieldset = styled.fieldset`
    border: none;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
`

const Label = styled.label`
    font-size: 18px;
    font-weight: 400;
    color: ${props => props.theme.secondary};
    margin-bottom: 3px;
`

const FieldWrapper = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 2px solid ${props => props.theme.secondary};
    padding-top: 1px; 
    padding-bottom: 4px;
`

const FieldInput = styled.input`
    border: none;
    outline: none;
    font-size: 32px;
    font-weight: 600;
    color: ${props => props.theme.primary};
`

const TextYear = styled.span`
    font-size: 32px;
    font-weight: 500;
    color: ${props => props.theme.primary};
`

const FieldIcon = styled.span`
    width: 32px;
    height: 32px;
    background: url("https://www.ciclic.com.br/static/img/assets/icon_edit-2x.png") center center no-repeat; 
`

const SubmitButton = styled.button`
    margin-top: 50px;
    border: none;
    outline: none;
    width: 80%;
    text-transform: uppercase;
    border-radius: 24px;
    background-image: linear-gradient(-270deg,#06dcd6,#8666fe);
    color: #fff;
    height: 48px;
    line-height: 48px;
    font-weight: 700;
`


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
            <SimulatorWrapper>
                {/* <Logo src={logo} alt="ciclic logo"/> */}

                <Form>
                    <Fieldset>
                        <Label>Nome</Label>
                        <FieldWrapper>
                            <FieldInput/>
                            <FieldIcon></FieldIcon>
                        </FieldWrapper>
                    </Fieldset>

                    <Fieldset>
                        <Label>Mensalidade</Label>
                        <FieldWrapper>
                            <FieldInput type="tel" maxlength="12"/>
                            <FieldIcon></FieldIcon>
                        </FieldWrapper>
                    </Fieldset>

                    <Fieldset>
                        <Label>Tempo</Label>
                        <FieldWrapper>
                            <FieldInput type="tel" maxlength="7"/>
                            <TextYear>{this.state.time === 1 ? 'ano' : 'anos'}</TextYear>
                            <FieldIcon></FieldIcon>
                        </FieldWrapper>
                    </Fieldset>

                    <SubmitButton>Simular</SubmitButton>
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