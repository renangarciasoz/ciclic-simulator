import React from 'react';
import styled, { css } from 'styled-components';

const styles = css`
    border: none;
    margin-top: 30px;
    display: flex;
    flex-direction: column;

    label {
        font-size: 18px;
        font-weight: 400;
        color: ${props => props.theme.secondary};
        margin-bottom: 3px;
    }

    div {
        display: flex;
        flex-direction: row;
        border-bottom: 2px solid ${props => props.theme.secondary};
        padding-top: 1px; 
        padding-bottom: 4px;
    }

    input {
        border: none;
        outline: none;
        font-size: 32px;
        font-weight: 600;
        color: ${props => props.theme.primary};
    }

    span {
        width: 32px;
        height: 32px;
        background: url("https://www.ciclic.com.br/static/img/assets/icon_edit-2x.png") center center no-repeat; 
    }
`

const StyledFieldset = styled.fieldset`${styles}`

const Fieldset = ({ label, ...props }) => {
    return (
        <StyledFieldset>
            <label>{label}</label>
            <div>
                <input {...props}/>
                <span></span>
            </div>
        </StyledFieldset>
    );
};

export default Fieldset;