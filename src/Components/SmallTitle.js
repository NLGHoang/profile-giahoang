import React from 'react'
import styled from 'styled-components'

function SmallTitle({ icon, title }) {
    return (
        <SmallTitleStyled>
            <p>{icon}</p>
            <h3>{title}</h3>
        </SmallTitleStyled>
    )
}

const SmallTitleStyled = styled.div`
    display: flex;
    align-items: center;
    p{
        svg{
            padding: 1rem;
            font-size: 6.5rem;
        }
    }
    h3{
        margin-left: 2rem;
        font-size: 3rem;
        color: var(--white-color);
    }
`;

export default SmallTitle
