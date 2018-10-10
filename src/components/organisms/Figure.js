import React from 'react';
import styled, { css } from 'styled-components';

const styles = css`
    width: 230px;
`
const StyledFigure= styled.img`${styles}`

const Figure = ({ src, alt, ...props }) => {
    return (
        <StyledFigure src={src} alt={alt} {...props}/>
    );
}

export default Figure;