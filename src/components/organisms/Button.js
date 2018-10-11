import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const styles = css`
    margin-top: 50px;
    font-family: Rubik;
    border: none;
    outline: none;
    text-decoration: none;
    text-align: center;
    appearance: none;
    width: 80%;
    text-transform: uppercase;
    border-radius: 24px;
    background-image: linear-gradient(-270deg,#06dcd6,#8666fe);
    color: #fff;
    height: 48px;
    line-height: 48px;
    font-weight: 400;
    font-size: 16px;
    user-select: none;

    &:disabled, [disabled] {
        cursor: disabled;
        pointer-events: none;
        background: white;
        background-image: none;
        border: 1px solid #ccc;
        color: #ccc;
    }
`

const StyledButton= styled.button`${styles}`

const StyledLink = styled(({...props}) => <Link {...props}/>)`${styles}`

const Button = ({ text, ...props }) => {
    if (props.to) {
        return <StyledLink {...props}>{text}</StyledLink>;
    }

    return <StyledButton {...props}>{text}</StyledButton>;
};

export default Button;