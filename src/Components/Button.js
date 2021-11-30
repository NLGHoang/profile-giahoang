import React from 'react'
import styled from 'styled-components'


function Button({ filter, button }) {
    return (
        <ButtonsStyled>
            {
                button.map((but, i) => {
                    return (
                        <ButtonStyled 
                            key={i}
                            onClick={() => filter(but)}
                        >
                            {but}
                        </ButtonStyled>
                    )
                })
            }
        </ButtonsStyled>
    )
}

const ButtonStyled = styled.button`
    outline: none;
    border: none;
    background-color: var(--background-light-color-2);
    color: var(--white-color);
    font-size:2rem;
    padding: .4rem 1.4rem;
    margin: 1rem 2rem;
    opacity: .9;
    cursor: pointer;
    transition: all .4s ease-in-out;
    &:active,&:hover, &:focus{
        background-color: var(--primary-color);
    }
`;
const ButtonsStyled = styled.div`
    margin-bottom: 3rem;
    display: inline-block;
`;

export default Button;
