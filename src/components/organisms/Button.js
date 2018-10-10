import React from 'react';
import styled, { css } from 'styled-components';

const styles = css`
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

const StyledButton= styled.button`${styles}`

const Button = ({ text, ...props }) => {
    return <StyledButton {...props}>{text}</StyledButton>;
};

export default Button;