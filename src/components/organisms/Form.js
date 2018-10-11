import React from "react";
import styled, { css } from "styled-components";

const styles = css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledForm = styled.form`
    ${styles};
`;

const Form = ({ onSubmit, data, ...props }) => {
    const submitForm = event => {
        event.preventDefault();

        if (onSubmit) {
            onSubmit(data);
        }
    };

    return <StyledForm onSubmit={submitForm} {...props} />;
};

export default Form;
