import React from 'react'
import styled from "styled-components";


function Title({ title, span}) {
    return (
        <TitleStyled>
            <h2>{title} <span>{span}</span> </h2>
        </TitleStyled>
    )
}

const TitleStyled = styled.div`
    @media (max-width:450px){
        h2{
            font-size: 4rem !important;
            span{
                font-size: 4.5rem !important;
                opacity: .3;
            }
        }
    }
    position: relative;
    h2{
        color: var(--white-color);
        font-size: 4rem;
        font-weight: 600;
        text-transform: uppercase;
        position: relative;
        padding-bottom: .8rem;
        &::before{
            content: "";
            position: absolute;
            bottom: 0;
            width: 12rem;
            height: .44rem;
            background-color: var(--background-light-color-2);
            border-radius: 2rem;
            left: 0;
        }

        &::after{
            content: "";
            position: absolute;
            bottom: 0;
            width: 5rem;
            height: .44rem;
            background-color: var(--primary-color);
            border-radius: 2rem;
            left: 0;
        }
        span{
            font-weight: 900;
            color: rgba(25, 29, 43, .44);
            font-size: 8rem;
            position: absolute;
            left: 0;
            top: 20%;
            z-index: -1;
        }
    }
`;

export default Title
