import React from 'react';
import styled from "styled-components";


function ButtonSubmit({ title }) {
    return (
        <ButtonSubmitStyled>
            {title}
        </ButtonSubmitStyled>
    )
}

const ButtonSubmitStyled = styled.button`
    border: none;
    outline: none;
    background-color: var(--primary-color);
    padding: 1rem 2.5rem;
    color: white;
    cursor: pointer;
    display: inline-block;
    font-size: 2.1rem;
    margin-top: 2rem;
    text-transform: uppercase;
    position: relative;
    width: 100%;
    &::after{
        content: "";
        position: absolute;
        width: 0;
        height: .3rem;
        transition: all .4s ease-in-out;
        left: 0;
        bottom: 0;
        opacity: .7;
    }
    &:hover::after{
        width: 100%;
        background-color: var(--white-color);
    }
`;

export default ButtonSubmit;
