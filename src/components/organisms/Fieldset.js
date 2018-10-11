import React from 'react';
import styled, { css } from 'styled-components';
import IntlCurrencyInput from 'react-intl-currency-input';

const styles = css`
    width: 77%;
    border: none;
    margin-top: 30px;
    display: flex;
    flex-direction: column;

    label {
        font-size: 18px;
        font-weight: 400;
        color: ${props => props.theme.secondary};
        margin-bottom: 3px;
        user-select: none;
    }

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        border-bottom: 2px solid ${props => props.theme.secondary};
        padding-top: 1px; 
        padding-bottom: 4px;
        padding-left: 2px;
        padding-right: 4px;

        @media screen and (max-width: 800px) {
            padding-left: 0px;
            padding-right: 0px;
        }
    }

    select {
        position: relative;
        width: 100%;
        background-color: transparent;
        background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4gICAgPHBhdGggZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiM0OENBQUMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIzIiBkPSJNMTEgMTRsNSA0IDUtNCIvPjwvc3ZnPg==');
        background-repeat: no-repeat;
        background-position: right center;
        border: none;
        color: #2f4b68;
        font-size: 35px;
        font-weight: 700;
        outline: 0;
        appearance: none;
        
        option {
            font-size: 20px;
        }

        @media screen and (max-width: 800px) {
            font-size: 22px;
        }
    }

    input {
        width: 100%;
        border: none;
        outline: none;
        font-size: 32px;
        font-weight: 600;
        color: ${props => props.theme.primary};

        @media screen and (max-width: 800px) {
            font-size: 22px;
        }
    }

    span {
        width: 32px;
        height: 32px;
        background: url("https://www.ciclic.com.br/static/img/assets/icon_edit-2x.png") center center no-repeat;
        background-size: cover; 
    }
`

const StyledFieldset = styled.div`${styles}`

const Fieldset = ({ label, ...props }) => {
    return (
        <StyledFieldset>
            <label>{label}</label>
            <Field {...props} handleChange={props.handleChange}/>
        </StyledFieldset>
    );
};

class Field extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    
    handleChange = (event, value, maskedValue) => {
        event.preventDefault();

        if(event.target.type === 'select-one') {
            this.props.handleChange(event.target.value, 'time')
            return this.setState({time: event.target.value})
        }

        if(event.target.type === 'text' && value >= 0.01) {
            this.props.handleChange(value, 'money')
            return this.setState({money: value})
        }

        this.props.handleChange(event.target.value, 'name')
        return this.setState({name: event.target.value})
    };
    
    render(){
        const currencyConfig = {
            locale: "pt-BR",
            formats: {
                number: {
                    BRL: {
                        style: "currency",
                        currency: "BRL",
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    }
                }
            }
        };
    
        if(this.props.money) {
            return (
                <div>
                    <IntlCurrencyInput currency="BRL" config={currencyConfig} onChange={this.handleChange}/>
                    <span></span>
                </div>
            );
        }
    
        if(this.props.select) {
            
            return (
                <div>
                    <select onChange={this.handleChange} value={this.props.time}>
                        {this.props.options && this.props.options.map((option, i)=>{
                            return <option key={i} value={option.value}>{option.text}</option>
                        })}
                    </select>
                </div>
            );
        }
    
        return (
            <div>
                <input type={this.props.type} maxLength={this.props.maxlength} onChange={this.handleChange} autoFocus={this.props.autofocus}/>
                <span></span>
            </div>
        )    
    }
};

export default Fieldset;